import { React, useEffect, useState } from "react";
import FeaturedCarCard from "./FeaturedCarCard";

import { getCars } from "../services/carServices";
import formatData from "../utils/formatData";

function FeaturedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars();

      setCars(formatData(data));
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
          {cars.map((cars ,i) => {
            return (
              //wrong
              <div key={i} className="row">
                {" "}
                {cars.map((car) => {
                  return <FeaturedCarCard key={car._id} {...car} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
      {/*/.container*/}
    </section>
  );
}

export default FeaturedCars;
