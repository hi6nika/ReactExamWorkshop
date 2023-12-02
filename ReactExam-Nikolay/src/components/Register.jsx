import styles from "../assets/css/Forms.module.css";
import { Link, NavLink } from "react-router-dom";

import { useContext, useState } from "react";
import AuthContext from "../contexts/authContext";
import useForm from "../hooks/useFormHook";

 
function Register() {
  const { registerEventHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(registerEventHandler, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <form onSubmit={onSubmit}>
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
            name="firstName"
            id="firstName"
            value={values.firstName}
            onChange={onChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={values.email}
            onChange={onChange}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={values.password}
            id="password"
            onChange={onChange}
          />
          <label htmlFor="repeatPassword">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name={"repeatPassword"}
            id={"repeatPassword"}
            value={values.repeatPassword}
            onChange={onChange}
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
