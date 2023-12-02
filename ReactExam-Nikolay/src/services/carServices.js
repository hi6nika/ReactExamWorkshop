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
