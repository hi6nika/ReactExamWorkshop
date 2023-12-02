import { Link, NavLink, useNavigate } from "react-router-dom";

import { addCar } from "../services/carServices";
import { useState } from "react";

const FORM_KEYS = {
  imgUrl: "imgUrl",
  make: "make",
  model: "model",
  condition: "condition",
  year: "year",
  body: "body",
  price: "price",
  horsePower: "horsePower",
  milage: "milage",
  description: "description",
};

function AddCar() {
  const navigateTo = useNavigate();
  const [errors, setErrors] = useState([]);

  const [values, setValues] = useState({
    [FORM_KEYS.imgUrl]: "",
    [FORM_KEYS.make]: "",
    [FORM_KEYS.model]: "",
    [FORM_KEYS.condition]: "",
    [FORM_KEYS.year]: "",
    [FORM_KEYS.body]: "",
    [FORM_KEYS.price]: "",
    [FORM_KEYS.horsePower]: "",
    [FORM_KEYS.milage]: "",
    [FORM_KEYS.description]: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  };

  async function submitEventHandler(e) {
    e.preventDefault();

    try {
      await addCar(values);
      navigateTo("/featured");
    } catch (error) {
      setErrors(error);
    }

    if (!errors) {
      console.log("a");
    }
  }

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <form onSubmit={submitEventHandler}>
        <div className="container">
          <h1>Add a car</h1>

          <hr />

          <label htmlFor="imgUrl">
            <b>Image Url</b>
          </label>
          <input
            type="text"
            placeholder="Enter imgUrl"
            name={FORM_KEYS.imgUrl}
            value={values[FORM_KEYS.imgUrl]}
            onChange={changeHandler}
            id={FORM_KEYS.imgUrl}
          />

          <label htmlFor="make">
            <b>Make</b>
          </label>
          <input
            type="text"
            placeholder="Enter Make"
            name={FORM_KEYS.make}
            value={values[FORM_KEYS.make]}
            onChange={changeHandler}
            id={FORM_KEYS.make}
          />

          <label htmlFor="model">
            <b>Model</b>
          </label>
          <input
            type="text"
            placeholder="Enter Model"
            name={FORM_KEYS.model}
            value={values[FORM_KEYS.model]}
            onChange={changeHandler}
            id={FORM_KEYS.model}
          />

          <label htmlFor="condition">
            <b>Condition</b>
          </label>
          <input
            type="text"
            placeholder="Enter Condition"
            name={FORM_KEYS.condition}
            value={values[FORM_KEYS.condition]}
            onChange={changeHandler}
            id={FORM_KEYS.condition}
          />

          <label htmlFor="year">
            <b>Year</b>
          </label>
          <input
            type="text"
            placeholder="Enter Year"
            name={FORM_KEYS.year}
            value={values[FORM_KEYS.year]}
            onChange={changeHandler}
            id={FORM_KEYS.year}
          />

          <label htmlFor="body">
            <b>Body</b>
          </label>
          <input
            type="text"
            placeholder="Enter Body Style"
            name={FORM_KEYS.body}
            value={values[FORM_KEYS.body]}
            onChange={changeHandler}
            id={FORM_KEYS.body}
          />

          <label htmlFor="price">
            <b>Price</b>
          </label>
          <input
            type="text"
            placeholder="Enter Price"
            name={FORM_KEYS.price}
            value={values[FORM_KEYS.price]}
            onChange={changeHandler}
            id={FORM_KEYS.price}
          />

          <label htmlFor="horsePower">
            <b>HP</b>
          </label>
          <input
            type="text"
            placeholder="Enter HP"
            name={FORM_KEYS.horsePower}
            value={values[FORM_KEYS.horsePower]}
            onChange={changeHandler}
            id={FORM_KEYS.horsePower}
          />

          <label htmlFor="milage">
            <b>Milage</b>
          </label>
          <input
            type="text"
            placeholder="Enter Milage"
            name={FORM_KEYS.milage}
            value={values[FORM_KEYS.milage]}
            onChange={changeHandler}
            id={FORM_KEYS.milage}
          />

          <label htmlFor="description">
            <b>Description</b>
          </label>
          <input
            type="text"
            placeholder="Enter Description"
            name={FORM_KEYS.description}
            value={values[FORM_KEYS.description]}
            onChange={changeHandler}
            id={FORM_KEYS.description}
          />

          <button type="submit">
            <a>Add Car</a>
          </button>
          <hr />
        </div>
      </form>
    </>
  );
}

export default AddCar;
