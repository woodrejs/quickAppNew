import axios from "axios";
import { STRAPI_DB } from "@env";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

export async function userLogin(identifier, password) {
  try {
    const { data } = await axios.post(`${STRAPI_DB}auth/local`, { identifier, password });
    return data.jwt;
  } catch (error) {
    console.log({ userAuth: error });
  }

  // Object {
  //   "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTMwMGQ0MmU5ZWJlNDUyOGQ2NGMyNCIsImlhdCI6MTYzMjg5NTIwMSwiZXhwIjoxNjM1NDg3MjAxfQ.qDvlH0yyRp3LRYP3k5uRlGL4S-oPsPXUren-6GWTIwc",
  //   "user": Object {
  //     "__v": 0,
  //     "_id": "615300d42e9ebe4528d64c24",
  //     "blocked": false,
  //     "confirmed": true,
  //     "createdAt": "2021-09-28T11:47:32.387Z",
  //     "email": "quickweek@gmail.com",
  //     "id": "615300d42e9ebe4528d64c24",
  //     "provider": "local",
  //     "role": Object {
  //       "__v": 0,
  //       "_id": "6152f81d2e9ebe4528d64b3b",
  //       "description": "Default role given to authenticated user.",
  //       "id": "6152f81d2e9ebe4528d64b3b",
  //       "name": "Authenticated",
  //       "type": "authenticated",
  //     },
  //     "updatedAt": "2021-09-28T11:47:32.603Z",
  //     "username": "Admin",
  //   },
  // }
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

  // Object {
  //   "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTQwMDdkNDQzNjMzMzRkNDNhNDUzOCIsImlhdCI6MTYzMjg5NTEwMSwiZXhwIjoxNjM1NDg3MTAxfQ.e-RN_HeMP-PwjRpniF-VcQMREORrdc30b2GdOxuvGr8",
  //   "user": Object {
  //     "__v": 0,
  //     "_id": "6154007d44363334d43a4538",
  //     "blocked": false,
  //     "confirmed": true,
  //     "createdAt": "2021-09-29T05:58:21.118Z",
  //     "email": "maciek@maciek.pl",
  //     "id": "6154007d44363334d43a4538",
  //     "provider": "local",
  //     "role": Object {
  //       "__v": 0,
  //       "_id": "6152f81d2e9ebe4528d64b3b",
  //       "description": "Default role given to authenticated user.",
  //       "id": "6152f81d2e9ebe4528d64b3b",
  //       "name": "Authenticated",
  //       "type": "authenticated",
  //     },
  //     "updatedAt": "2021-09-29T05:58:21.337Z",
  //     "username": "Maciek",
  //   },
  // }
}
//validation schema
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
