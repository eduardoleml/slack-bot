const axios = require('axios');

const urlBase = process.env.AWS_BASE_URL;

const api = axios.create({
    baseUrl: urlBase,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

module.exports.lambdaService = {
    get: async (path, params) => {
        try {
            let response = await api.get(getUrlPath(`${urlBase}/${path}`, params), params);
            return response.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    },
    post: async (path, params, data) => {
        try {
            let response = await api.post(getUrlPath(`${urlBase}/${path}`, params), data);
            return response.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    },
    put: async (path, params, data) => {
        try {
            let response = await api.put(getUrlPath(`${urlBase}/${path}`, params), data);
            return response.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    },
    delete: async (path, params) => {
        try {
            let response = await api.delete(getUrlPath(`${urlBase}/${path}`, params));
            return response.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

const getUrlPath = (path, searchParameters) => {
    console.table(searchParameters);
    let urlPath = new URL(path);
    for (let key in searchParameters){
        urlPath.searchParams.set(key, `${searchParameters[key]}`);
    }
    console.log("string de consulta a AWS", urlPath.toString());
    return urlPath.toString();
}