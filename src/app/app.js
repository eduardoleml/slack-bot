require('dotenv').config();
console.log(process.env.NODE_ENV);

const { App } = require("@slack/bolt");
const { infoUsuario, getUsuariosDisponiblesPorRol, getUsuariosPorRol, solicitarAsignación } = require('../actions/user');
const { getProjectInfo, getProyactosDispPorRol, getProyectos } = require('../actions/projects');
const { getWeek } = require('../libs/dates');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
    port: process.env.PORT || 3000
});

app.message('hello', async ({ message, say }) => {
    console.log(message);
    await say({
        blocks: [
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: `Hey there <@${message.user}>!`
                },
                accessory: {
                    type: 'button',
                    text: {
                        type: 'plain_text',
                        text: 'Click Me'
                    },
                    action_id: 'button_click'
                }
            }
        ],
        text: `Hey there <@${message.user}>!`
    });
});

app.message('[bot] --ayuda', async ({ message, say }) => {
    await say(` Hola, soy el bot de la empresa, puedo ayudarte con la informacion de los usuarios y proyectos de la empresa.\n 
Para solicitar informacion de un usuario utiliza el siguiente formato: [bot] --usuario:<id_usuario> -rol -semana:<numero>.\n 
Para solicitar informacion de un proyecto utiliza el siguiente formato: [bot] --proyecto:<id_proyecto>\n
Los comandos disponibles son:\n
    [bot]\n
        --ayuda\n
            \n
        --usuarios:disponibles\n
            -rol	-semana\n
            \n
        --usuario:id\n
            -rol 	-carga	-semana\n
            \n
        --proyectos:disponibles\n
            -rol\n
        \n
        --proyecto:id\n
            \n
        --asignar -proyecto:<id> -usuario:<id> -horas:<num> -semana<num>\n`);
});

app.message('[bot] --usuarios', async ({ message, say }) => {
    let params = message.text.split("--usuarios:")[1].trim().split(" ")[0];
    console.log(params);
    switch(params){
        case "disponibles":
            console.log("Usuarios disponibles");
            let rol = message.text.split('-rol:')[1].split(" ")[0].trim();
            let semana = 0;
            try {
                semana = parseInt(message.text.split('-semana:')[1].split(" ")[0].trim());
            } catch (error) {
                semana = getWeek(new Date());
                console.log("Semana actual: ", semana);
            }
            let mensaje = await getUsuariosDisponiblesPorRol(rol, semana);
            console.log(mensaje);
            await say("Estos son los usuarios disponibles para el rol " + rol + " en la semana " + semana);
            await say(mensaje);
            break;
        default:
            let rolDefault = message.text.split('-rol:')[1].split(" ")[0].trim();
            let mensajeDefault = await getUsuariosPorRol(rolDefault);
            await say("Estos son los usuarios de la empresa para el rol " + rolDefault);
            await say(mensajeDefault);
            break;
    }
});

app.message('[bot] --usuario:', async ({ message, say }) => {
    console.log("BOT FUNCTION")
    let incluyeRoles = message.text.includes('roles');
    console.log("Include roles: ", incluyeRoles);
    //revisar si se solicita la informacion de la carga dentro de el arreglo de los complements params
    let includeCargabilidad = message.text.includes('semana');
    console.log("Include cargabilidad: ", includeCargabilidad);
    let userName = message.text.split('--usuario:')[1].trim().split(" ")[0].trim();
    let semanaCarga = 0;
    if(includeCargabilidad) {
        semanaCarga = parseInt(message.text.split('-semana:')[1].split(" ")[0].trim());
    }
    console.log(userName);
    try {
        let response = await infoUsuario(userName, incluyeRoles, includeCargabilidad, semanaCarga);
        // await say(`You are looking for info about ${userName}, there you go:`);
        await say(response);
    } catch (error) {
        await say(`Sorry, I couldn't find any info about ${userName}`);
    }
});

app.message('[bot] --proyectos', async ({ message, say }) => {
    let param = message.text.split("--proyectos:")[1].trim().split(" ")[0];
    console.log(param);
    switch(param){
        case "disponibles":
            let rol = "";
            try {
                rol = message.text.split('-rol:')[1].split(" ")[0].trim();
            } catch (error) {
                console.log("No se proporciono el rol");
            }
            if(!rol) {
                await say("No se proporciono un rol para buscar proyectos");
                return;
            }
            try {
                let response = await getProyactosDispPorRol(rol);
                await say("Estos son los proyectos de la empresa para el rol " + rol);
                await say(response);
            } catch (error) {
                await say("No se pudieron encontrar proyectos, puede que no se buscara un rol correctamente");
            }
            break;
        default:
            let projectName = param;
            let projectInfoMessage = await getProyectos({id: projectName});
            await say(`Parece que buscas información acerca del proyecto ${projectName}, aqui la tienes:`);
            await say(projectInfoMessage);
            break;
    }
});

app.message('[bot] --proyecto:', async ({ message, say }) => {
    let projectName = message.text.split('--proyecto:')[1].split(" ")[0].trim();
    let projectInfoMessage = await getProjectInfo(projectName);
    await say(`Parece que buscas información acerca del proyecto ${projectName}, aqui la tienes:`);
    await say(projectInfoMessage);
});

app.message('[bot] --asignar', async ({ message, say }) => {
    let params = message.text.split("--asignar")[1].trim();
    console.log(params);
    //eliminar de la cadena de texto todos los espacios en blanco:
    params = params.replace(/\s/g, '').split('-');
    // console.log(params);
    // params = params.split("-");
    console.log(params);
    let asignationParams = {}
    params.forEach(param => {
        if(param){
            if(param.includes(':')){
                let key = param.split(":")[0];
                let value = param.split(":")[1];
                return asignationParams[key] = value;
            } else {
                return asignationParams[param] = 0;
            }
        }
    });
    // asignationParams = asignationParams.filter(param => param !== undefined);
    console.log(asignationParams);
    if(!asignationParams.semana) asignationParams.semana = getWeek(new Date());
    let response = await solicitarAsignación(asignationParams);
    await say(response);
});

app.action('button_click', async ({ body, ack, say }) => {
    await ack();
    await say('Button clicked!');
});



(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();