import React, { useContext } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PrivateCardInfo } from "./../PrivateRoute/PrivateCardContext";
import { UsePrivateContext } from "../PrivacyContext/PrivateContext";

const SingleCard = ({ house }) => {
  const {
    id,
    title,
    location,
    price,
    size_sqft,
    bedrooms,
    bathrooms,
    year_built,
    parking_spaces,
    type,
    amenities,
    description,
    image,
  } = house;

  const { user, loginRegistrationBtn } = useContext(UsePrivateContext);

  const { handleWishList } = useContext(PrivateCardInfo);

  return (
    <div className="my-8 card bg-base-100  hover:opacity-95 hover:scale-102 transition-all duration-500 shadow-2xl">
      <Link
        to={`/${id}`}
        className=" hover:cursor-pointer shadow rounded-2xl overflow-hidden"
      >
        <figure>
          <img className="" src={image} alt={image} />
        </figure>
      </Link>

      <div className="p-5">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="font-bold">
          location : <span className="font-semibold">{location}</span>
        </p>
        <p className="font-bold">
          Type : <span className="font-semibold">{type}</span>
        </p>
        <div className="font-semibold flex gap-10 mb-5">
          <div>
            <h3 className="font-dancing text-3xl mt-7 mb-2 font-bold">
              Feature .. .
            </h3>
            <div className="space-y-1 md:ml-5 ml-2 font-semibold">
              <p>Size sqft : {size_sqft}</p>
              <p>bedrooms : {bedrooms}</p>
              <p>bathrooms : {bathrooms}</p>
              <p>year_built : {year_built}</p>
              <p>parking_spaces : {parking_spaces}</p>
            </div>
          </div>
          <div className="">
            <h3 className="font-dancing text-3xl mt-7 mb-2 font-bold">
              Amenities .. .
            </h3>
            <ul className="space-y-1 md:ml-5 ml-2 list-disc">
              {amenities.map((d, index) => (
                <li key={index} className="">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <p>status : {status}</p> */}
        <div className="mb-7">
          <h3 className="font-dancing text-3xl mt-7 mb-2 font-bold">
            Description .. .
          </h3>
          <p className="ml-3 text-justify">
            {description.slice(0, 200)} ... ...
            <Link
              to={`/${id}`}
              className=" hover:cursor-pointer shadow-2xl rounded-2xl overflow-hidden"
            >
              <span className="font-semibold text-blue-500">Read More</span>
            </Link>
          </p>
        </div>

        <div className="card-actions justify-between items-end pb-5">
          <p className="font-bold flex items-end gap-2">
            <span className="text-xl">Price :</span>
            <span className="font-semibold flex items-center">
              {price}
              <FaBangladeshiTakaSign />
            </span>
          </p>
          <div className="">
            <button
              onClick={() => {
                user ? handleWishList(id) : loginRegistrationBtn();
              }}
              className="mr-3 btn btn-info text-white"
            >
              Add Wish List
            </button>
            <button className="btn btn-primary btn-disabled">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
