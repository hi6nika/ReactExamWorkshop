import { Link, NavLink, useNavigate } from "react-router-dom";

import { addCar } from "../services/carServices";
import { useEffect, useState } from "react";
import useForm from "../hooks/useFormHook";
import useUserHook from "../hooks/useUserHooks";

function AddCar() {
  const [errors, setErrors] = useState([]);
  const [user] = useUserHook("auth", []);

  const navigateTo = useNavigate();

  async function submitEventHandler(value) {
    try {
      await addCar(value);
      navigateTo("/featured");
    } catch (error) {
      setErrors(error);
    }

    if (!errors) {
      console.log(errors);
    }
  }

  const { values, onChange, onSubmit } = useForm(submitEventHandler, {
    imgUrl: "",
    make: "",
    model: "",
    condition: "",
    year: "",
    body: "",
    price: "",
    horsePower: "",
    milage: "",
    description: "",
    owner: user,
  });

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <form onSubmit={onSubmit}>
        <div className="container">
          <h1>Add a car</h1>

          <hr />

          <label htmlFor="imgUrl">
            <b>Image Url</b>
          </label>
          <input
            type="text"
            placeholder="Enter imgUrl"
            name="imgUrl"
            value={values.imgUrl}
            onChange={onChange}
            id="imgUrl"
          />

          <label htmlFor="make">
            <b>Make</b>
          </label>
          <input
            type="text"
            placeholder="Enter Make"
            name="make"
            value={values.make}
            onChange={onChange}
            id="make"
          />

          <label htmlFor="model">
            <b>Model</b>
          </label>
          <input
            type="text"
            placeholder="Enter Model"
            name="model"
            value={values.model}
            onChange={onChange}
            id="model"
          />

          <label htmlFor="condition">
            <b>Condition</b>
          </label>
          <input
            type="text"
            placeholder="Enter Condition"
            name="condition"
            value={values.condition}
            onChange={onChange}
            id="condition"
          />

          <label htmlFor="year">
            <b>Year</b>
          </label>
          <input
            type="text"
            placeholder="Enter Year"
            name="year"
            value={values.year}
            onChange={onChange}
            id="year"
          />

          <label htmlFor="body">
            <b>Body</b>
          </label>
          <input
            type="text"
            placeholder="Enter Body Style"
            name="body"
            value={values.body}
            onChange={onChange}
            id="body"
          />

          <label htmlFor="price">
            <b>Price</b>
          </label>
          <input
            type="text"
            placeholder="Enter Price"
            name="price"
            value={values.price}
            onChange={onChange}
            id="price"
          />

          <label htmlFor="horsePower">
            <b>HP</b>
          </label>
          <input
            type="text"
            placeholder="Enter HP"
            name="horsePower"
            value={values.horsePower}
            onChange={onChange}
            id="horsePower"
          />

          <label htmlFor="milage">
            <b>Milage</b>
          </label>
          <input
            type="text"
            placeholder="Enter Milage"
            name="milage"
            value={values.milage}
            onChange={onChange}
            id="milage"
          />

          <label htmlFor="description">
            <b>Description</b>
          </label>
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            value={values.description}
            onChange={onChange}
            id="description"
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
