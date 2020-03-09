import { post } from "./axios";
const REGISTER_URL = "/api/users";
const LOGIN_URL = "/api/auth";

export const register = (email, password, username) => {
  return post(REGISTER_URL, {
    email,
    password,
    username,
   }).then(res => res.data.data.token);
};

export const login = (email, password) => {
    return post(LOGIN_URL, {
      email,
      password,
    }).then(res => res.data.data.token);
};

