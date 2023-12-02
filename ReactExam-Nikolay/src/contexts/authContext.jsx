import { createContext, useState } from "react";
import { login, register } from "../services/userServices";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

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

  const values = {
    registerEventHandler,
    loginSubmitHandler,
    isAuthenticated: !!auth.token,
  };

  return (
    <AuthContext.Provider value={values}>{children} </AuthContext.Provider>
  );
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
