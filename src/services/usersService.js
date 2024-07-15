let {usuarios} = require('../../test/localData');
const { lambdaService } = require('../subscribers/lambda');

module.exports.getUsuario = async (idUsuario) => {
    let userData = await lambdaService.get(`users/${idUsuario}`);
    return userData;
}

module.exports.getUsuariosPorRol = async (rol) => {
    let users = await lambdaService.get(`users`, {rol});
    return users;
}

module.exports.solicitarAsignacion = async (data) => {
    let response = await lambdaService.post('users/charge', {}, data);
    return response;
}