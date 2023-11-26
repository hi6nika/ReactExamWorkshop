const userController = require("express").Router();
const userServices = require("../services/userServices");

userController.post("/register", async (req, res) => {
  try {
    const userData = await userServices.register({ ...data });

    res.status(201).json(userData);
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
});

module.exports = userController;
