import { createContext } from "react";
import { login, register, logout } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const loginSubmitHandler = async (values) => {
    try {
      const token = await login(values);
      setAuth(token);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  async function registerEventHandler(values) {
    try {
      const token = await register(values);
      setAuth(token);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function logoutEventHandler(token) {
    try {
      const res = await logout(token);
      setAuth(!res);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    registerEventHandler,
    loginSubmitHandler,
    logoutEventHandler,
    isAuthenticated: !!auth.token,
    firstName: auth.firstName,
    token: auth.token,
    _id: auth._id,
    userData: auth.user,
  };

  return (
    <AuthContext.Provider value={values}>{children} </AuthContext.Provider>
  );
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
