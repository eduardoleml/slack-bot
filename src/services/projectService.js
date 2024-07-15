const { proyects } = require('../../test/localData');
const { lambdaService } = require('../subscribers/lambda');

module.exports.getInfoProyecto = async (idProyecto) => {
    let proyecto = await lambdaService.get(`projects/${idProyecto}`, {});
    return proyecto;
}

module.exports.getProyectosFiltrados = async (filtros) => {
    let proyectos = await lambdaService.get('projects', filtros);
    return proyectos;
}

module.exports.getProyectosDisponiblesPorRol = async (rol) => {
    // let proyectos = proyects.filter(proyecto => proyecto.estatus == 'disponible' && proyecto.rolesRequeridos.find(r => r.rol === rol));
    let proyectos = await lambdaService.get('projects', {estatus: 'disponible'});
    let proyectosFiltrados = proyectos.filter(proyecto => proyecto.rolesRequeridos.find(r => r.rol === rol));
    return proyectosFiltrados;
}