import { post } from "./axios";
const REGISTER_URL = "/api/users";
const LOGIN_URL = "/api/auth";


export const login = (email, password) => {
  const data = {
    email,
    password
  };
  return post(LOGIN_URL, data);
};

export const register = (email, password, username) => {
  const data = {
    email,
    password,
    username
  };

  return post(REGISTER_URL, data);
};