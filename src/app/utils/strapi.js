import axios from "axios";
import { STRAPI_DB } from "@env";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";

// USER
export async function userLogin(identifier, password) {
  return await axios.post(`${STRAPI_DB}auth/local`, { identifier, password });
}
export async function userRegister(username, email, password) {
  console.log(STRAPI_DB);
  return await axios.post(`${STRAPI_DB}auth/local/register`, {
    username,
    email,
    password,
  });
}
export async function userDelete(jwt) {
  return await axios({
    method: "delete",
    url: `${STRAPI_DB}users-permissions/users/me`,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}
export async function userUpdate(obj, jwt) {
  return await axios({
    method: "put",
    url: `${STRAPI_DB}users-permissions/users/me`,
    data: obj,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}
// FAVORITES
export async function deleteFavorite(id, jwt) {
  return await axios({
    method: "delete",
    url: `${STRAPI_DB}favorites/${id}`,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}
export async function createFavorite(obj, jwt) {
  return await axios({
    method: "post",
    url: `${STRAPI_DB}favorites`,
    data: obj,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}
//AVATARS
export async function findOneAvatar(id, jwt) {
  return await axios({
    method: "get",
    url: `${STRAPI_DB}avatars/${id}`,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}
export async function deleteAvatar(id, jwt) {}
export async function createAvatar(id, jwt) {
  const { base64 } = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    base64: true,
  });

  if (!base64) return null;

  const file = { base64: `data:image/png;base64,${base64}`, id };
  const URL = `${STRAPI_DB}avatars`;
  const options = { headers: { Authorization: `Bearer ${jwt}` } };
  return await axios.post(URL, file, options);
}
//SCHEDULE
export async function createSchedule(obj, jwt) {
  return await axios({
    method: "post",
    url: `${STRAPI_DB}schedules`,
    data: obj,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}
export async function deleteSchelude(id, date, jwt) {
  return await axios({
    method: "delete",
    url: `${STRAPI_DB}schedules/${id}/${date}`,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}
//VALIDATIONS SCHEMES
export const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Niepoprawny adres email.")
    .required("Pole nie może być puste."),
});
export const DeleteSchema = Yup.object().shape({
  delete: Yup.string()
    .matches(/delete/, "Niepoprawna wartość.")
    .required("Pole nie może być puste."),
});
export const UsernameSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Login musi mieć conajmniej 5 znaków.")
    .required("Pole nie może być puste."),
});
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Niepoprawny adres email.")
    .required("Pole nie może być puste."),
  password: Yup.string()
    .min(5, "Hasło musi mieć conajmniej 5 znaków.")
    .max(30, "Hasło może mieć maksymalnie 30 znaków.")
    .required("Pole nie może być puste."),
});
export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Login musi mieć conajmniej 5 znaków.")
    .required("Pole nie może być puste."),
  email: Yup.string()
    .email("Niepoprawny adres email.")
    .required("Pole nie może być puste."),
  password: Yup.string()
    .min(5, "Hasło musi mieć conajmniej 5 znaków.")
    .max(30, "Hasło może mieć maksymalnie 30 znaków.")
    .required("Pole nie może być puste."),
});
export const SearchSchema = Yup.object().shape({
  search: Yup.string()
    .min(3, "Wyszukiwanie musi mieć conajmniej 3 znaki.")
    .required("Pole nie może być puste."),
});
