import { useEffect, useState } from "react";
import FeaturedCarCard from "./FeaturedCarCard";
import { useGetData } from "../hooks/useDataHooks";

function FeaturedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCars(await useGetData("GET", "Cars"));
    };

    fetchData().catch((e) => {
      console.log(e);
    });
  }, []);

  return (
    <section id="featured-cars" className="featured-cars">
      <div className="container">
        <div className="section-header">
          <p>
            checkout <span>the</span> featured cars
          </p>
          <h2>featured cars</h2>
        </div>
        {/*/.section-header*/}
        <div className="featured-cars-content">
          <div className="row">
            {cars.map((car) => (
              <FeaturedCarCard key={car._id} {...car} />
            ))}

            {/* CARS HERE MY Friend */}
          </div>
        </div>
      </div>
      {/*/.container*/}
    </section>
  );
}

export default FeaturedCars;
