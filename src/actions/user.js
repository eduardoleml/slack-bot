const { stylizedUserInfoMessage, stylizedUsersListMessage } = require("../libs/stylizedMessage");
const { getUsuario, getUsuariosPorRol, solicitarAsignacion } = require("../services/usersService")


module.exports.infoUsuario = async (idUsuario, mostrarRoles, mostrarCarga, semana) => {
    let usuario = await getUsuario(idUsuario);
    let textMessage = stylizedUserInfoMessage(usuario, mostrarRoles, mostrarCarga, semana);
    return textMessage;
}

module.exports.getUsuariosPorRol = async (rol) => {
    console.log("Rol in action: ", rol);
    let usuarios = await getUsuariosPorRol(rol);
    let message = stylizedUsersListMessage(usuarios);
    return message;
}

module.exports.getUsuariosDisponiblesPorRol = async (rol, semana) => {
    let usuarios = await getUsuariosPorRol(rol);
    let usuariosDisponibles = usuarios.filter(usuario => {
        let carga = 0;
        usuario.planeacion.forEach(element => {
            if(element.semana === semana) {
                carga += element.asignacion;
            }
        });
        if(carga < 40) {
            return usuario;
        }
    });
    let mensaje = stylizedUsersListMessage(usuariosDisponibles);
    return mensaje;
}

module.exports.solicitarAsignación = async (parametros) => {
    let message = "Se ha solicitado la asignación de un usuario a un proyecto";
    let asignacionResponse = await solicitarAsignacion(parametros);
    message += "\n" + asignacionResponse.message;
    return message;
}