import axios from "axios";
const APP_URL = "http://localhost:5500/api/marhaba/";

axios.defaults.headers = {
  "Content-Type": "application/json",
  "auth-token": window.localStorage.getItem("token") ?? "",
};

export function getAllproduct() {
  return axios.get(APP_URL + "product");
}
