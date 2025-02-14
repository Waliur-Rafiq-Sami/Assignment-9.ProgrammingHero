import React, { createContext, useContext, useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { UsePrivateContext } from "../PrivacyContext/PrivateContext";

export const PrivateCardInfo = createContext();

const PrivateCardContext = ({ children }) => {
  const { user } = useContext(UsePrivateContext);
  const storageKey = user?.displayName
    ? `wishlist_${user.displayName}`
    : `wishlist_${user?.email}`;

  const [wishCardId, setWishCard] = useState([]);

  useEffect(() => {
    if (storageKey) {
      const storedWishlist = JSON.parse(localStorage.getItem(storageKey)) || [];
      setWishCard(storedWishlist);
    }
  }, [storageKey]);

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(wishCardId));
    }
  }, [wishCardId, storageKey]);

  const handleWishList = (i) => {
    if (!storageKey) return;

    const id = parseInt(i);
    if (wishCardId.includes(id)) {
      toast.error("Already in Wish List! ❌", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const updatedList = [...wishCardId, id];
    setWishCard(updatedList);
    localStorage.setItem(storageKey, JSON.stringify(updatedList));

    toast.success("Added to Wish List! 🎉", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const removeWishList = (i) => {
    if (!storageKey) return;

    const id = parseInt(i);
    const updatedList = wishCardId.filter((item) => item !== id);
    setWishCard(updatedList);

    if (updatedList.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(updatedList));
    } else {
      localStorage.removeItem(storageKey);
    }

    toast.info("Removed from Wish List! ❌", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const cardValue = { wishCardId, handleWishList, removeWishList };

  return (
    <PrivateCardInfo.Provider value={cardValue}>
      {children}
      <ToastContainer />
    </PrivateCardInfo.Provider>
  );
};

export default PrivateCardContext;
