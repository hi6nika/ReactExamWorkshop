import styles from "../assets/css/Forms.module.css";
import { Link, NavLink } from "react-router-dom";

import { login } from "../services/userServices";
import { useState } from "react";

const FORM_KEYS = {
  Email: "email",
  Password: "password",
};

function Login() {
  const [values, setValues] = useState({
    [FORM_KEYS.Email]: "",
    [FORM_KEYS.Password]: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
    setErrors([]);
  };

  async function submitEventHandler(e) {
    e.preventDefault();

    try {
      await login(values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <form onSubmit={submitEventHandler}>
        <div className="container">
          <h1>Login</h1>
          <p>Please fill in this form to login.</p>
          <hr />

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
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name={FORM_KEYS.Password}
            value={values[FORM_KEYS.Password]}
            onChange={changeHandler}
            id={FORM_KEYS.Password}
          />

          <button type="submit">
            <a>Login</a>
          </button>
          <hr />
        </div>
        <div className="container signin">
          <p>
            Don't have an account?
            <Link to={"/register"}>
              <a>Sign Up</a>
            </Link>
            .
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
