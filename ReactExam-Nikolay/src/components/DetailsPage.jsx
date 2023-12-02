import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCar } from "../services/carServices";

//use the hoooks

function DetailsPage() {
  const [car, setCar] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCar(id);

      setCar(data);

      console.log(data);
    };

    fetchData().catch((e) => {
      console.log(e);
    });
  }, []);

  return (
    <>
      <div className="details-div">
        <div>
          <div className="details-cars-img">
            <img src={car.imgUrl} />
          </div>

          <div className="featured-model-info">
            <p>
              year: {car.year}
              <span className="featured-mi-span"> {car.milage} mi</span>
              <span className="featured-hp-span"> {car.horsePower}HP</span>
            </p>
          </div>
        </div>
        <div className="featured-cars-txt">
          <h2>
            <a>
              {car.make} {car.model}
            </a>
          </h2>
          <h3>${car.price}</h3>
          <p>description : {car.description}</p>
        </div>{" "}
      </div>
    </>
  );
}

export default DetailsPage;
