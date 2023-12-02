import styles from "../assets/css/Forms.module.css";
import { Link, NavLink } from "react-router-dom";

import { useContext, useState } from "react";

import useForm from "../hooks/useFormHook";
import AuthContext from "../contexts/authContext";

function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    email: "",
    password: "",
  });

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <form onSubmit={onSubmit}>
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
            name="email"
            id="email"
            onChange={onChange}
            value={values.email}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            onChange={onChange}
            value={values.password}
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
