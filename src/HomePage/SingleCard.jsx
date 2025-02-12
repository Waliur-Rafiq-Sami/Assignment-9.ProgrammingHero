import React from "react";

const SingleCard = ({ house }) => {
  console.log(house);
  const {
    title,
    location,
    price,
    size_sqft,
    bedrooms,
    bathrooms,
    year_built,
    parking_spaces,
    status,
    type,
    amenities,
    description,
    image,
  } = house;
  return (
    <div className="p-2">
      <div className="card bg-base-100 shadow-sm ">
        <figure>
          <img className="" src={image} alt={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>location : {location}</p>
          <p>size_sqft : {size_sqft}</p>
          <p>bedrooms : {bedrooms}</p>
          <p>bathrooms : {bathrooms}</p>
          <p>year_built : {year_built}</p>
          <p>parking_spaces : {parking_spaces}</p>
          <p>status : {status}</p>
          <p>type : {type}</p>
          <div>
            {amenities.map((d) => (
              <p>{d}</p>
            ))}
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
