import { Link, NavLink } from "react-router-dom";

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
};

function AddCar() {
  const [values, setValues] = useState({
    [FORM_KEYS.imgUrl]: "",
    [FORM_KEYS.make]: "",
    [FORM_KEYS.model]: "",
    [FORM_KEYS.condition]: "",
    [FORM_KEYS.year]: "",
    [FORM_KEYS.body]: "",
    [FORM_KEYS.price]: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  };

  async function submitEventHandler(e) {
    e.preventDefault();

    console.log("aaa")

    try {
      await addCar(values);
    } catch (error) {
      console.log(error);
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
