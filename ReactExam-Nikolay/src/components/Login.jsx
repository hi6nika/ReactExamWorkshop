import styles from "../assets/css/userForm.module.css";

async function submitEventHandler(e) {
  e.preventDefault();
  // await UserServices.Login()
}

function Login() {
  return (
    <>
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <form action="/action_page.php" onSubmit={submitEventHandler}>
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

            <button type="submit" className="registerbtn">
              Login
            </button>
            <hr />
          </div>
          <div className="container signin">
            <p>
              Don't have an account? <a href="#">Sign up</a>.
            </p>
          </div>
        </form>
      </>
    </>
  );
}

export default Login;
