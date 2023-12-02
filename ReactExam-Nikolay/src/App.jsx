import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import AuthContext from "./contexts/authContext";
import { login, register } from "./services/userServices";

import "./assets/css/style.css";

import FeaturedCars from "./components/FeaturedCars";
import Home from "./components/Home";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import AddCar from "./components/AddCar";
import DetailsPage from "./components/DetailsPage";

function App() {
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
    <>
      <AuthContext.Provider value={values}>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<FeaturedCars />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
