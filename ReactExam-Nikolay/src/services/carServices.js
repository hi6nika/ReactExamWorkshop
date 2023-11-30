const carURL = `/cars`;

import { requests } from "../services/reqTemplate";

const carEndpoints = {
  get: carURL + "/catalog",
};

export const getCars = async () => {
  return await requests.get(carEndpoints.get);
};


export const addCar = async (data) => {
  return await requests.post(carEndpoints.get , data);
};
