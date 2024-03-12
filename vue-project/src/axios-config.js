import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bank-test-3c74d9b539e4.herokuapp.com/',
    timeout: 5000,
});

export default instance;
