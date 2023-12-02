import { Link, NavLink } from "react-router-dom";

function FeaturedCarCard({
  _id,
  imgUrl,
  model,
  make,
  condition,
  year,
  body,
  price,
  milage,
  horsePower,
}) {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="single-featured-cars">
          <div className="featured-img-box">
            <div className="featured-cars-img">
              <img src={imgUrl} alt="cars" />
            </div>
            <div className="featured-model-info">
              <p>
                year: {year}
                <span className="featured-mi-span"> {milage} mi</span>
                <span className="featured-hp-span">
                  {horsePower}HP
                </span> body: {body}
              </p>
            </div>
          </div>
          <div className="featured-cars-txt">
            <h2>
              <a>
                {make} {model}
              </a>
            </h2>
            <h3>${price}</h3>
          </div>
          <Link to={`/details/${_id}`}>
            <a>Details</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FeaturedCarCard;
