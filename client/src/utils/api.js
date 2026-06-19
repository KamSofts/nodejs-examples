import axios from "axios";
const BASE_URL = "http://192.168.56.183:5000";

const api = axios.create({
    baseURL: BASE_URL + "/api"
});

api.interceptors.response.use(
    (response) => response, (error) => {
        const status = error.response ? error.response.status : null;
        console.log(status);
        console.log(error.response?.data?.message || "Message is emtpy");

        return Promise.reject(error);
    }
);

export default api;