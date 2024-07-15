

module.exports.stylizedUserInfoMessage = (userData, mostrarRoles, mostrarCarga, semana) => {
    let message = `*Nombre*: ${userData.nombre}\n`;

    //moestra la informacion de los roles si es solicitado
    if(mostrarRoles) {
        message += `\nRoles asignados: \n`;
        userData.rolesAsignados.forEach(rol => {
            message += `    - ${rol}\n`;
        });
    }

    // muestra la informacion de la carga si es solicitado
    if(mostrarCarga && semana){
        let cargabilidad = userData.planeacion.filter(plan => plan.semana === semana);
        message += `\nSe muestra la carga de la semana: ${semana}\n`;
        cargabilidad.forEach(element => {
            message += `*Proyecto*: ${element.descripcion}\n`;
            message += `*Responsable*: ${element.responsable}\n`;
            message += `*Horas asignadas*: ${element.asignacion}\n`;
            message += `\n`;
        });
    }
    return message;
}

module.exports.stylizedUsersListMessage = (usersData) => {
    let message = "";
    usersData.forEach(user => {
        message += `*${user.nombre}*\n`;
        message += `\n`;
    });
    return message;
}

module.exports.stylizedProjectInfoMessage = (projectData) => {
    let message = `*Nombre*: ${projectData.nombre}\n`;
    message += `*Descripcion*: ${projectData.descripcion}\n`;
    message += `*Fecha de inicio*: ${projectData.fechaInicio}\n`;
    message += `*Fecha de fin*: ${projectData.fechaFin}\n`;
    message += `*Responsable*: ${projectData.responsable}\n`;

    message += `\nRoles requeridos: \n`;
    projectData.rolesRequeridos.forEach(element => {
        message += `    *Rol*: ${element.rol}\n`;
        message += `    *Cantidad*: ${element.cupo}\n`;
        message += `\n`;
    });
    return message;
}

module.exports.stylizedProjectListMessage = (projectsData) => {
    let message = `*Lista de proyectos:*\n\n`;
    projectsData.forEach(project => {
        message += `*Nombre*: ${project.nombre}\n`;
        message += `*Descripcion*: ${project.descripcion}\n`;
        message += `*Fecha de inicio*: ${project.fechaInicio}\n`;
        message += `*Fecha de fin*: ${project.fechaFin}\n`;
        message += `*Responsable*: ${project.responsable}\n`;
        message += `\n`;
    });
    return message;
}