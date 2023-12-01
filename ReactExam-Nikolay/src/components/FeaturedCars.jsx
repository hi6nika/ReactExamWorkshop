import { React, useEffect, useState } from "react";
import FeaturedCarCard from "./FeaturedCarCard";

import { getCars } from "../services/carServices";

function formatData(data) {
  const output = [];

  let buffer = [];

  for (let i = 0; i < data.length; i++) {
    buffer.push(data[i]);

    if (i === 3) {
      output.push(buffer);
      buffer = []
    }

    if(i < data.length){
      output.push(buffer);
    }
  }

  return output
}

function FeaturedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars();
      setCars(formatData(data));

      console.log(cars)
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
          {cars.map((car, i) => {
            if (i === 3 || i === 0) {
              return <div className="row"> </div>;
            }

            return <FeaturedCarCard key={car._id} {...car} />;
          })}
        </div>
      </div>
      {/*/.container*/}
    </section>
  );
}

export default FeaturedCars;
