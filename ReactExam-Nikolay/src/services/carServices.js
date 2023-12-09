const carURL = `/cars`;

import { requests } from "../services/reqTemplate";

const carEndpoints = {
  get: carURL + "/catalog",
  details: carURL + "/details",
  buy: carURL + "/buy",
  delete: carURL + "/delete",
  editCar: carURL + "/edit",
  getMyCars: carURL + "/getMyCars",
};

export const getCars = async (data) => {
  

  if (!data) {
    return await requests.get(carEndpoints.get);
  }
  return await requests.get(carEndpoints.get + "/" + data);
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
  const req = await requests.delete(`${carEndpoints.delete}/${id}`);

  return req;
};

export const getMyCars = async (myID) => {
  return await requests.get(`${carEndpoints.getMyCars}/${myID[0]}`);
};

export const editCar = async (id, data) => {
  return await requests.put(`${carEndpoints.editCar}/${id}`, data);
};
