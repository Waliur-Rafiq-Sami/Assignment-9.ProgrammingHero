import React, { createContext, useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

export const PrivateCardInfo = createContext();

const PrivateCardContext = ({ children }) => {
  const [wishCardId, setWishCard] = useState(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return storedWishlist;
  });

  // Save wishlist to localStorage whenever it updates
  useEffect(() => {
    if (wishCardId.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishCardId));
    }
  }, [wishCardId]);

  const handleWishList = (i) => {
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
      return; // Prevent duplicate toasts
    }

    // Add item to wishlist and update localStorage immediately
    setWishCard((prevWishlist) => {
      const updatedList = [...prevWishlist, id];
      localStorage.setItem("wishlist", JSON.stringify(updatedList)); // Save immediately
      return updatedList;
    });

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
    const id = parseInt(i);
    const updatedList = wishCardId.filter((item) => item !== id); // Remove selected ID

    setWishCard(updatedList); // Update state FIRST

    if (updatedList.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(updatedList)); // Update localStorage
    } else {
      setTimeout(() => {
        localStorage.removeItem("wishlist"); // Ensure state updates first
      }, 0);
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
