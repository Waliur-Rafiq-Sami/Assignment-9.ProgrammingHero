import React, { useEffect, useState, useRef, useContext } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import { PrivateCardInfo } from "../PrivateRoute/PrivateCardContext";
import { UsePrivateContext } from "../PrivacyContext/PrivateContext";

const DetailsCardPopUp = () => {
  const { user, loginRegistrationBtn } = useContext(UsePrivateContext);
  const { handleWishList } = useContext(PrivateCardInfo);

  const { id } = useParams();
  const houseId = Number(id);
  const modalRef = useRef(null);

  const [AllHouse, setHouse] = useState([]);
  const [house, setDetails] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/houseData.json")
      .then((res) => res.json())
      .then((data) => {
        setHouse(data);
      });
  }, []);

  useEffect(() => {
    if (AllHouse.length > 0) {
      const foundHouse = AllHouse.find((h) => h.id === houseId) || null;
      setDetails(foundHouse);
    }
  }, [AllHouse, houseId]);

  // Function to open the modal
  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  if (!house) {
    return <h2 className="text-center text-xl mt-10">Loading...</h2>;
  }

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
    <>
      <HomePage></HomePage>
      <button onClick={handleOpenModal()} className="btn btn-primary"></button>
      <dialog
        ref={modalRef}
        className="modal modal-bottom sm:modal-middle bg-[#2e2828c2]"
      >
        <div className="modal-box md:w-11/12 min-w-5xl bg-[#c0c0c027]">
          <form method="dialog">
            <button
              onClick={() => navigate("/house")}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500 bg-red-300 hover:bg-red-100 border-0 hover:scale-105 transition-transform"
            >
              ✕
            </button>
          </form>
          <div>
            <div className="md:p-2 hover:cursor-auto">
              <div className="card bg-base-100 shadow-2xl flex">
                <div className="flex gap-10">
                  <figure>
                    <img className="px-2" src={image} alt={image} />
                  </figure>
                  <div className="font-semibold md:flex flex-col gap-10 mb-5  hidden">
                    <div>
                      <h3 className="font-dancing text-3xl mt-7 mb-2 font-bold">
                        Feature .. .
                      </h3>
                      <div className="space-y-1 ml-5 font-semibold ">
                        <p>Size sqft : {size_sqft}</p>
                        <p>bedrooms : {bedrooms}</p>
                        <p>bathrooms : {bathrooms}</p>
                        <p>year_built : {year_built}</p>
                        <p>parking_spaces : {parking_spaces}</p>
                      </div>
                    </div>
                    <div className="">
                      <h3 className="font-dancing text-3xl mb-2 font-bold">
                        Amenities .. .
                      </h3>
                      <ul className="space-y-1 ml-5 list-disc">
                        {amenities.map((d, index) => (
                          <li key={index} className="">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div>
                    <h2 className="md:text-3xl text-2xl font-semibold">
                      {title}
                    </h2>
                    <p className="font-bold">
                      location :
                      <span className="font-semibold">{location}</span>
                    </p>
                    <p className="font-bold">
                      Type : <span className="font-semibold">{type}</span>
                    </p>
                  </div>
                  {/* .... */}
                  <div className="font-semibold flex flex-col gap-10 mb-5  md:hidden">
                    <div>
                      <h3 className="font-dancing text-3xl mt-7 mb-2 font-bold">
                        Feature .. .
                      </h3>
                      <div className="space-y-1 ml-5 font-semibold ">
                        <p>Size sqft : {size_sqft}</p>
                        <p>bedrooms : {bedrooms}</p>
                        <p>bathrooms : {bathrooms}</p>
                        <p>year_built : {year_built}</p>
                        <p>parking_spaces : {parking_spaces}</p>
                      </div>
                    </div>
                    <div className="">
                      <h3 className="font-dancing text-3xl mb-2 font-bold">
                        Amenities .. .
                      </h3>
                      <ul className="space-y-1 ml-5 list-disc">
                        {amenities.map((d, index) => (
                          <li key={index} className="">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-7">
                    <h3 className="font-dancing text-3xl mt-7 mb-2 font-bold">
                      Description .. .
                    </h3>
                    <p className="ml-3 text-justify">{description}</p>
                  </div>
                  <div className="card-actions justify-between items-end">
                    <p className="font-bold flex items-end gap-2 text-3xl">
                      <span className="">Price :</span>
                      <span className="font-semibold text-2xl flex items-center">
                        {price}
                        <FaBangladeshiTakaSign />
                      </span>
                    </p>
                    <div className="">
                      <button
                        onClick={() => {
                          user
                            ? houseId && handleWishList(id)
                            : houseId && loginRegistrationBtn();
                        }}
                        className="mr-3 btn btn-info text-white"
                      >
                        Add Wish List
                      </button>
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => navigate("/house")}>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default DetailsCardPopUp;
