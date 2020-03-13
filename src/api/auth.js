import { post } from "./axios";
const API_REGISTER_URL = "/api/users";
const API_LOGIN_URL = "/api/auth";

export const register = (email, password, username) => {
  return post(API_REGISTER_URL, {
    email,
    password,
    username,
   }).then(res => res.data.data.token);
};

export const login = (email, password) => {
    return post(API_LOGIN_URL, {
      email,
      password,
    }).then(res => res.data.data.token);
};

