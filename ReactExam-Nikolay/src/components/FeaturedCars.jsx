import { React, useEffect, useState } from "react";
import FeaturedCarCard from "./FeaturedCarCard";

import { getCars } from "../services/carServices";
function formatData(arr) {
  const copy = [...arr];
  const output = [];

  let buff = [];

  let times = Math.ceil(copy.length / 4);

  while (times > 0) {
    for (let i = 0; i < copy.length; i++) {
      buff.push(copy[i]);

      if (i === 3) {
        output.push(buff);
        buff = [];

        copy.splice(0, 4);
        break;
      }

      if (buff.length === copy.length) {
        output.push(buff);
        break;
      }

      if (copy.length === 1) {
        output.push(buff);
        buff = [];
        break;
      }
    }

    times--;
  }
  console.log("===");

  return output;
}

function FeaturedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars();

      console.log(data);
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
          {cars.map((cars) => {
            return (
              <div className="row">
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
