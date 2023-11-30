const Car = require("../mongoose/models/car");

exports.addCar = async (data) => {
  const car = await Car.create(data);

  return car;
};

exports.getAllCars = async (data) => {
  const car = await Car.find().lean();

  return car;
};

exports.getCar = async (id) => {
  const car = await Car.findById(id).lean();

  return car;
};
