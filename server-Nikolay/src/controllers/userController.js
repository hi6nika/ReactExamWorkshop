const userController = require("express").Router();
const userServices = require("../services/userServices");

userController.post("/register", async (req, res) => {
  const data = req.body;
  try {
    const userData = await userServices.register({ ...data });

    res.status(201).json(userData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

userController.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await userServices.login(email, password);
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(401);
  }
});

module.exports = userController;
