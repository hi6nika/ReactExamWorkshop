const UserUrl = "/users";
import { requests } from "../services/reqTemplate";

const userEndpoints = {
  register: UserUrl + "/register",
  login: UserUrl + "/login",
  logout: UserUrl + "/logout",
};

export const register = async (data) => {
  return await requests.post(userEndpoints.register, data);
};

export const login = async (data) => {
  return await requests.post(userEndpoints.login, data);
};
