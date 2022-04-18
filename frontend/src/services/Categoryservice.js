import axios from "axios";
const APP_URL = "http://localhost:5500/api/marhaba/";

axios.defaults.headers = {
  "Content-Type": "application/json",
  "auth-token": window.localStorage.getItem("token") ?? "",
};

export function getAllcategory() {
  console.log("function getAllcategory");
  return axios.get(APP_URL + "category");
}
export function getcategory(id) {
  console.log("function getAllcategory");
  return axios.get(APP_URL + "category/"+id);
}

export function createCategorys(name, image) {
  console.log("getAllcategory");

  const formData = new FormData();

  formData.append("image", image, image.name);

  formData.append("name", name);

  console.log("formData : ", formData.get("image"));

  return axios.post(APP_URL + "category/create", formData);
}

export function updateCategory(id, name) {
  console.log('category updating');
  return axios.post(APP_URL + "category/update/" + id, { name: name });
}

export function deleteCategory(id) {
  console.log('category deleted');
  return axios.delete(APP_URL + "category/delete/" + id);
}
