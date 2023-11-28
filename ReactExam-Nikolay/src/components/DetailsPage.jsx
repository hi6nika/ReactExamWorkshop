import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const URL = "http://localhost:25565/cars/details";

function DetailsPage() {
  const [car, setCar] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((x) => {
        x.json();
      })
      .then((x) => setCar(x))
      .catch((e) => console.log(e));
  }, []);

  return <>{car.make} </>; //undefined
}

export default DetailsPage;
