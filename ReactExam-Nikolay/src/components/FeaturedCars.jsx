import { useEffect, useState } from "react";
import FeaturedCarCard from "./FeaturedCarCard";

function FeaturedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars([
      {
        _id: "65652eb5aec9e5c98dd29193",
        imgUrl:
          "https://images.pistonheads.com/nimg/40746/bmw-m6-m6-S4040750-2.jpg",
        model: "e63",
        make: "bmw",
        condition: "brand New",
        year: "2009",
        body: "coupe",
        price: 20000,
        __v: 0,
      },
      {
        _id: "65652f15aec9e5c98dd29195",
        imgUrl:
          "https://frankfurt.apollo.olxcdn.com/v1/files/mrjsawsk3ukp-BG/image;s=1080x720",
        model: "cls",
        make: "mercedes",
        condition: "almost brand New",
        year: "2011",
        body: "coupe",
        price: 15000,
        __v: 0,
      },
    ]);
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
