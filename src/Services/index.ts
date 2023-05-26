import _axios from "axios";
import { LoginDTO, LoginRes } from "../Models/auth";
import { SingleUserRes, UserListRes } from "../Models/user";
import { API_Url } from "./config";

const instance = _axios.create({
  baseURL: API_Url,
});

const userAxios = {
  instance: instance,
  baseUrl: process.env.REACT_APP_BASE_TASK_SERVICE,

  login(payload: LoginDTO): Promise<LoginRes> {
    return instance.post(`/api/login`, payload);
  },
  getUserList(): Promise<UserListRes> {
    return instance.get(`/api/users`);
  },
  getUserById(id: string): Promise<SingleUserRes> {
    return instance.get(`/api/users/${id}`);
  },
  deleteUserById(id: number): Promise<void> {
    return instance.delete(`/api/users/${id}`);
  },
};
export default userAxios;
