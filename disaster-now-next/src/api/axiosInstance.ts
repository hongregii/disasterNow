import { LoginDto, SignupDto } from "@/interface/userDtos";
import axios from "axios";

const axiosLocalInstance = axios.create({
  baseURL: "http://localhost:3100",
  headers: {
    token: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

const axiosLogOutInstance = axios.create({
  baseURL: "http://localhost:3100",
});

export const loginAxios = async (loginData: LoginDto) => {
  try {
    const res = await axiosLogOutInstance.post("/auth/login", loginData);
    sessionStorage.setItem("token", res.data.token);
    return res.data.token;
  } catch {
    // console.log(res);
    // alert("올바른 email / 비밀번호를 입력하세요");
    // if (res.status === 201) {
    alert("올바른 email / 비밀번호가 아닙니다.");
  }
};

export const getAnyoneAxios = async (endpoint: string) => {
  const res = await axiosLogOutInstance.get(`${endpoint}`);
  return res;
};

export const signUpAxios = async (signUpData: SignupDto) => {
  const res = await axiosLogOutInstance.post("/user/sign-up", signUpData);
  // sessionStorage.setItem("token", res.data.token);
  return res;
};

export const getAxios = async (endpoint: string) => {
  const res = await axiosLocalInstance.get(`${endpoint}`);
  return res;
};
export const postAxios = async (endpoint: string, body: object) => {
  const res = await axiosLocalInstance.post(`${endpoint}`, body);
  return res;
};
export const patchAxios = async (endpoint: string, body: object) => {
  const res = await axiosLocalInstance.patch(`${endpoint}`, body);
  return res;
};
export const deleteAxios = async (endpoint: string) => {
  const res = await axiosLocalInstance.delete(`${endpoint}`);
  return res;
};
