import axios from 'axios';
const APP_URL = "http://localhost:5500/api/marhaba/";

axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: window.localStorage.getItem("token") ?? ''
}

export function login(email, password) {
    return axios.post(APP_URL + 'login',{email: email, password: password});
}