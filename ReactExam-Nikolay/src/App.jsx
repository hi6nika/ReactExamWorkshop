import "./assets/css/style.css";
import FeaturedCars from "./components/FeaturedCars";

import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>

<Navigation/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<FeaturedCars />} />
      </Routes>
    </>
  );
}

export default App;
