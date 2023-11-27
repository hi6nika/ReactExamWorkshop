const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, "Model is required!"],
  },
  make: {
    type: String,
    required: [true, "Make is required!"],
  },
  type: {
    type: String,
    required: [true, "Type is required!"],
  },
  fuel: {
    type: String,
    required: [true, "Fuel is required!"],
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
