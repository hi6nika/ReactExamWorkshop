import { useEffect, useState } from "react";
import FeaturedCarCard from "./FeaturedCarCard";

function FeaturedCars() {



  
 
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
             
              <FeaturedCarCard />
           

            {/* CARS HERE MY Friend */}
          </div>
        </div>
      </div>
      {/*/.container*/}
    </section>
  );
}

export default FeaturedCars;
