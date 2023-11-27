import styles from "../assets/css/userForm.module.css";

 
 async function submitEventHandler(e) {
  e.preventDefault();
 await UserServices.register()
}

function Register() {
  return (
    <>
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <form action="/action_page.php" onSubmit={submitEventHandler}>
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
              required=""
            />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required=""
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required=""
            />
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              id="psw-repeat"
              required=""
            />

            <button type="submit" className="registerbtn">
              Register
            </button>
            <hr />
          </div>
          <div className="container signin">
            <p>
              Already have an account? <a href="#">Sign in</a>.
            </p>
          </div>
        </form>
      </>
    </>
  );
}

export default Register;
