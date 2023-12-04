import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import "./assets/css/style.css";

import FeaturedCars from "./components/FeaturedCars";
import Home from "./components/Home";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import AddCar from "./components/AddCar";
import DetailsPage from "./components/DetailsPage";
import Logout from "./components/Logout";
import MyCars from "./components/MyCars";

function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<FeaturedCars />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/myCars" element={<MyCars />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
