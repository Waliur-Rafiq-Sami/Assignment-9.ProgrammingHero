import { useContext, useEffect, useState } from "react";
import { PrivateCardInfo } from "../PrivateRoute/PrivateCardContext";
import Header from "../SharedStyle/Header";
import Footer from "../Footer/Footer";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const WishList = () => {
  const cardValue = useContext(PrivateCardInfo);
  const [allHouseData, setAllHouseData] = useState([]);
  const [wishListData, setWishListData] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const res = await fetch("/houseData.json");
        const data = await res.json();
        setAllHouseData(data);
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    };

    fetchHouses();
  }, []);

  useEffect(() => {
    if (allHouseData.length > 0 && cardValue.length > 0) {
      const filteredHouses = allHouseData.filter((h) =>
        cardValue.includes(h.id)
      );
      setWishListData(filteredHouses);
    }
  }, [allHouseData, cardValue]);

  const card = (house) => {
    return (
      <div
        key={house.id}
        className=" bg-base-100 shadow-2xl my-10 mx-auto m-1 p-2 rounded-xl flex md:gap-10 md:items-center flex-col md:flex-row"
      >
        <figure>
          <img
            className="rounded-xl p-2 md:w-75"
            src={house.image}
            alt={house.title}
          />
        </figure>
        <div className="flex flex-col p-2 md:p-0 mb-3 md:mb-0">
          <h2 className="md:text-3xl text-2xl font-semibold">{house.title}</h2>
          <p className="font-bold">
            Location: <span className="font-semibold">{house.location}</span>
          </p>
          <p className="font-bold">
            Type: <span className="font-semibold">{house.type}</span>
          </p>
          <p className="font-bold flex items-end gap-2 text-2xl mt-2 mb-1">
            Price:
            <span className="font-semibold text-xl flex items-center">
              {house.price}
              <FaBangladeshiTakaSign />
            </span>
          </p>
          <div>
            <button className="mr-3 btn btn-warning text-white">Remove</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto my-10">
        <h2 className="text-center md:py-8 md:text-6xl font-bold font-dancing">
          Wish List
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {wishListData.length > 0 ? (
            wishListData.map((a) => <div key={a.id}>{card(a)}</div>)
          ) : (
            <p className="text-center text-gray-500 text-xl">
              No items in your wishlist.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
