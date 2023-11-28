const CarController = require("express").Router();
const carServices = require("../services/carServices");
const toErrText = require("../util/toErrText");

CarController.post("/addCar", async (req, res) => {
  const data = req.body;
  try {
    const carData = await carServices.addCar({ ...data });
    res.status(201).json(carData);
  } catch (error) {
    res.status(400).send(toErrText(error));
  }
});

CarController.get("/catalog", async (req, res) => {
  try {
    const carData = await carServices.getAllCars();
    res.status(200).json(carData);
  } catch (error) {
    res.status(400).send(toErrText(error));
  }
});

module.exports = CarController;
