import styles from "../assets/css/Forms.module.css";
import { Link, NavLink } from "react-router-dom";

import { register } from "../services/userServices";
import { useState } from "react";

const FORM_KEYS = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  Password: "password",
  RePassword: "repeatPassword",
};

function Register() {
  const [values, setValues] = useState({
    [FORM_KEYS.FirstName]: "",
    [FORM_KEYS.LastName]: "",
    [FORM_KEYS.Email]: "",
    [FORM_KEYS.Password]: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
   
  };

  async function submitEventHandler(e) {
    e.preventDefault();

try {
  await register(values);
} catch (error) {
  console.log(error)
}  
  }

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <form onSubmit={submitEventHandler}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name={FORM_KEYS.FirstName}
            value={values[FORM_KEYS.FirstName]}
            onChange={changeHandler}
            id={FORM_KEYS.FirstName}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name={FORM_KEYS.Email}
            value={values[FORM_KEYS.Email]}
            onChange={changeHandler}
            id={FORM_KEYS.Email}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name={FORM_KEYS.Password}
            value={values[FORM_KEYS.Password]}
            id={FORM_KEYS.Password}
            onChange={changeHandler}
          />
          <label htmlFor="repeatPassword">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name={FORM_KEYS.RePassword}
            value={values[FORM_KEYS.RePassword]}
            id={FORM_KEYS.RePassword}
            onChange={changeHandler}
          />

          <button type="submit">
            <a>Register</a>
          </button>

          <hr />
        </div>
        <div className="container signin">
          <p>
            Already have an account?
            <Link to={"/login"}>
              <a>Sign In</a>
            </Link>
            .
          </p>
        </div>
      </form>
    </>
  );
}

export default Register;
