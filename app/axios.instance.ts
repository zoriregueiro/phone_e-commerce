import axios from 'axios';

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

const api = axios.create({
    baseURL: apiUrl,
});

api.interceptors.request.use(config => {
    config.headers['x-api-key'] = apiKey;
    return config;
});

export default api;
