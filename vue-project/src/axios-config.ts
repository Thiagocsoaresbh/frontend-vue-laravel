import axios from 'axios';

const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: apiBaseURL,
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
