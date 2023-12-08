const Car = require("../mongoose/models/car");

exports.addCar = async (data) => {
  const car = await Car.create(data);

  return car;
};

exports.getAllCars = async (data) => {
  const car = await Car.find().lean();

  return car;
};

exports.getMyCars = async (data) => {
  const car = await Car.find({ owner: data }).lean();

  return car;
};

exports.getCar = async (id) => {
  const car = await Car.findById(id).lean();

  return car;
};

exports.updateCarViews = async (id) => {
  const car = await Car.findById(id).lean();

  const newValue = car.views + 1;

  const updatedCar = await Car.findByIdAndUpdate(id, { views: newValue });

  return updatedCar;
};

exports.addBuyerToCar = async (id, buyerDetails) => {
  const car = await Car.findById(id).lean();

  car.buyers.push(buyerDetails);

  const updatedCar = await Car.findByIdAndUpdate(
    id,
    { buyers: car.buyers },
    { new: true }
  );

  return updatedCar;
};

exports.deleteCar = async (id) => {
  const car = await Car.findByIdAndDelete(id);

  return car;
};

exports.editCar = async (id, data) => {
  const car = await Car.findByIdAndUpdate(id, data);
  return car;
};
