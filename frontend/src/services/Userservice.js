import axios from 'axios';
const APP_URL = "http://localhost:5500/api/marhaba/";

axios.defaults.headers = {
    'Content-Type': 'application/json',
    "auth-token": window.localStorage.getItem("token") ?? ''
}

export function getAllusers() {
    console.log('All users :',getAllusers);
    return axios.get(APP_URL + "users");
  }