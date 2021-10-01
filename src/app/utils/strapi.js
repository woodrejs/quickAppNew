import axios from "axios";
import { STRAPI_DB } from "@env";
import * as Yup from "yup";

// USER
export async function userLogin(identifier, password) {
  try {
    const { data } = await axios.post(`${STRAPI_DB}auth/local`, { identifier, password });

    return data.jwt;
  } catch (error) {
    console.log({ userAuth: error });
  }
}
export async function userRegister(username, email, password) {
  try {
    const { data } = await axios.post(`${STRAPI_DB}auth/local/register`, {
      username,
      email,
      password,
    });
    return data.jwt;
  } catch (error) {
    console.log({ userAuth: error });
  }
}
// FAVORITES
export async function deleteFavorite(id, jwt) {
  try {
    const { data } = await axios({
      method: "delete",
      url: `${STRAPI_DB}favorites/${id}`,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return data;
  } catch (error) {
    console.log({ deleteFavorite: error });
  }
}
export async function createFavorite(obj, jwt) {
  try {
    const { data } = await axios({
      method: "post",
      url: `${STRAPI_DB}favorites`,
      data: obj,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return data;
  } catch (error) {
    console.log({ createFavorite: error });
  }
}
export async function findFavorites(jwt) {
  try {
    const { data } = await axios({
      method: "get",
      url: `${STRAPI_DB}favorites`,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return data;
  } catch (error) {
    console.log({ findFavorites: error });
  }
}
//VALIDATIONS SCHEMES
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
