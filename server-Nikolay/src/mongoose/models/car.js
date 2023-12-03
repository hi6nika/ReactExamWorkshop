const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: [true, "Image is required!"],
  },
  model: {
    type: String,
    required: [true, "Model is required!"],
  },
  make: {
    type: String,
    required: [true, "Make is required!"],
  },
  condition: {
    type: String,
    required: [true, "Condition is required!"],
  },
  year: {
    type: String,
    required: [true, "Year is required!"],
  },
  body: {
    type: String,
    required: [true, "Body is required!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
  },
  horsePower: {
    type: Number,
    required: [true, "HP is required!"],
  },
  milage: {
    type: Number,
    required: [true, "Milage is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  owner: {
    type: Array,
    required: [true, "Owner is required!"],
  },
  viewers: {
    type: Number,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
