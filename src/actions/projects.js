const { stylizedProjectInfoMessage, stylizedProjectListMessage } = require("../libs/stylizedMessage");
const { getInfoProyecto, getProyectosDisponiblesPorRol, getProyectosFiltrados } = require("../services/projectService")


module.exports.getProjectInfo = async (projectId) => {
    let project = await getInfoProyecto(projectId);
    let message = stylizedProjectInfoMessage(project);
    return message;
}

module.exports.getProyectos = async (filtros) => {
    let proyectos = await getProyectosFiltrados(filtros);
    let message = stylizedProjectListMessage(proyectos);
    return message;
}

module.exports.getProyactosDispPorRol = async (rol) => {
    let projects = await getProyectosDisponiblesPorRol(rol);
    let projectMessages = stylizedProjectListMessage(projects);
    return projectMessages;
}