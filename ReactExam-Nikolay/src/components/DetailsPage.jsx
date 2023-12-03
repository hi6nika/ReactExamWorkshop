import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { addViews, getCar } from "../services/carServices";
import useUserHook from "../hooks/useUserHooks";

function DetailsPage() {
  const [car, setCar] = useState({});
  const { id } = useParams();

  const [user, userID] = useUserHook("auth", []);

  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCar(id);

      addViews(id);
      setIsOwner(data.owner[0] === userID);

      setCar(data);
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
              <span className="featured-hp-span"> {car.body} </span>
              <span className="featured-hp-span"> {car.condition} </span>
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
          <p>description : {car.description} </p>
        </div>

        {isOwner && (
          <>
            <p>Views: {car.views}</p>
          </>
        )}

        {!isOwner && (
          <>
            <Link>
              <a>Seller Name : </a>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default DetailsPage;
