import axios from 'axios';
const APP_URL = "http://localhost:5500/api/marhaba/";

axios.defaults.headers = {
    'Content-Type': 'application/json',
    "auth-token": window.localStorage.getItem("token") ?? ''
}

export function login(email, password) {
    return axios.post(APP_URL + 'login',{email: email, password: password});
}

export function register(name, email, password, role) {
    return axios.post(APP_URL + 'register',{name: name, email: email, password: password, role: role});
}