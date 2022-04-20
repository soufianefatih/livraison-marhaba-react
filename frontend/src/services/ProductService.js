import axios from "axios";
const APP_URL = "http://localhost:5500/api/marhaba/";

axios.defaults.headers = {
  "Content-Type": "application/json",
  "auth-token": window.localStorage.getItem("token") ?? "",
};

export function getAllproduct() {
  return axios.get(APP_URL + "product");
}

export function createProduct(name,decsription,price, image ) {
    console.log("getAllcategory");
  
    const formData = new FormData();
  
    formData.append("image", image, image.name);
  
    formData.append("name", name);
    formData.append("decsription", decsription);
    formData.append("price", price);


  
    console.log("formData : ", formData.get("image"));
  
    return axios.post(APP_URL + "product/create", formData);
  }