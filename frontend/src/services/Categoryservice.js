import axios from 'axios';
const APP_URL = "http://localhost:5500/api/marhaba/";

axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: window.localStorage.getItem("token") ?? ''
}

export function getAllcategory() {
    console.log("function getAllcategory");
    return axios.get(APP_URL + "category");
  }