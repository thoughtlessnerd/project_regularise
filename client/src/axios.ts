import axios from 'axios';

const API = axios.create({
    baseURL:"https://regularise-api.onrender.com/api/v1/",
    timeout:10000
})

export default API;
