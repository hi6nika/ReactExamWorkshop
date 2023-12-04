const carURL = `/cars`;

import { requests } from "../services/reqTemplate";

const carEndpoints = {
  get: carURL + "/catalog",
  details: carURL + "/details",
  buy: carURL + "/buy",
  delete: carURL + "/delete",
  getMyCars: carURL + "/getMyCars",
};

export const getCars = async () => {
  return await requests.get(carEndpoints.get);
};

export const addCar = async (data) => {
  return await requests.post(carEndpoints.get, data);
};

export const getCar = async (id) => {
  return await requests.get(`${carEndpoints.details}/${id}`);
};

export const addViews = async (id) => {
  return await requests.put(`${carEndpoints.details}/${id}`);
};

export const buyCar = async (id, details) => {
  return await requests.put(`${carEndpoints.buy}/${id}`, details);
};

export const deleteCar = async (id) => {
  return await requests.delete(`${carEndpoints.delete}/${id}`);
};

export const getMyCars = async (myID) => {
  return await requests.get(`${carEndpoints.getMyCars}/${myID[0]}`);
};
