import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    timeout: 5000,
});

export default instance;
