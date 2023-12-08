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
    <section id="featured-cars" className="featured-cars-my">
      <div className="container">
        {cars.length === 0 ? (
          <></>
        ) : (
          <>
            <div className="section-header">
              <h2>My Cars</h2>
            </div>
          </>
        )}

        <div className="featured-cars-content">
          {cars.length === 0 ? (
            <>
              <div className="section-header">
                {" "}
                <h2>You have no cars!</h2>
              </div>
            </>
          ) : (
            cars.map((cars, i) => {
              return (
                // ne e validen key//
                <div key={i} className="row">
                  {" "}
                  {cars.map((car) => {
                    return <FeaturedCarCard key={car._id} {...car} />;
                  })}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default MyCars;
