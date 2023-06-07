import axios from "axios";

const axiosLocalInstance = axios.create({
  baseURL: "http://localhost:3100",
  // headers: {
  //   token: `Bearer ${sessionStorage.getItem("token")}`,
  // },
});

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
