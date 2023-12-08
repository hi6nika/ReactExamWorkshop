import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { addViews, getCar, buyCar, deleteCar } from "../services/carServices";
import useUserHook from "../hooks/useUserHooks";
import AuthContext from "../contexts/authContext";
import useBuyHook from "../hooks/useBuyHook";
import useDeleteHook from "../hooks/useDeleteHook";

function DetailsPage() {
  const navigateTo = useNavigate();
  const [car, setCar] = useState({});
  const { id } = useParams();
  const { firstName, _id, isAuthenticated } = useContext(AuthContext);

  const [user, userID] = useUserHook("auth", []);

  const [isOwner, setIsOwner] = useState(false);

  const { onBuyHandler } = useBuyHook(buyCar, id, { firstName, _id });

  const { onDeleteHandler } = useDeleteHook(deleteCar, id);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCar(id);

      addViews(id);
      setIsOwner(data?.owner[0] === userID);

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

        {!isOwner ? (
          isAuthenticated ? (
            <>
              <Link onClick={onBuyHandler}>
                <a>BUY!</a>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/register"}>
                <a>BUY!</a>
              </Link>
            </>
          )
        ) : (
          <>
            <p>Views: {car.views}</p>{" "}
            <Link onClick={onDeleteHandler}>
              <a className="DeleteBtn">Delete</a>
            </Link>
            <Link to={`/edit/${id}`}>
              <a className="EditButton">Edit</a>
            </Link>
          </>
        )}
      </div>

      <div>
        <div className="buyersList">
          <h2>Buyer list</h2>

          <ul>
            {!car.buyers?.length > 0 ? (
              <>
                <li>No Buyers!</li>
              </>
            ) : (
              car.buyers?.map((x) => <li key={x._id}>{x.firstName}</li>)
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
