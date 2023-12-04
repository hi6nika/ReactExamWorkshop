import { useEffect, useState } from "react";

import FeaturedCarCard from "./FeaturedCarCard";
import useUserHook from "../hooks/useUserHooks";
import { getMyCars } from "../services/carServices";
import formatData from "../utils/formatData";

function MyCars() {
  const [cars, setCars] = useState([]);

  const [userID] = useUserHook("auth", []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyCars(userID);

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
          {cars.map((cars, i) => {
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

export default MyCars;
