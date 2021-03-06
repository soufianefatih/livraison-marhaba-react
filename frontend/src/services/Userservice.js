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

 export function createuser(name,email,password,role,status) {
    console.log("createuser");
  

    return axios.post(APP_URL + "users/create" ,{ name: name ,email:email ,password:password,role:role ,status:status });
  }

  export function getAlldilevry() {
    console.log('All dilevery :',getAlldilevry);
    return axios.get(APP_URL + "users/delivery");
  }
  export function getuser(id) {
    return axios.get(APP_URL + "users/" + id);
  }
//   export function updateuser(id, name, email,password,role,status) {
//     console.log('user updating');
//     return axios.post(APP_URL + "users/update/" + id, { name: name , email:email , password: password , role: role, status:status});
//   }

export function deleteUser(id) {
    return axios.delete(APP_URL + "users/delete/" + id);
  }

  export function ConfirmStatusDelivery(id) {
    return axios.get(APP_URL + "users/status/" + id);
  }