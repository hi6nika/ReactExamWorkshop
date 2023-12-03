const carURL = `/cars`;

import { requests } from "../services/reqTemplate";

const carEndpoints = {
  get: carURL + "/catalog",
  details: carURL + "/details",
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
  const car = await requests.get(`${carEndpoints.details}/${id}`);

  const copy = { ...car };

  copy.views = copy.views + 1;

  const data = { views: copy.views };

  
  return await updateCar(id, data);
};

export const updateCar = async (id, newData) => {
  return await requests.put(`${carEndpoints.details}/${id}`, newData);
};
