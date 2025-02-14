import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WishList from "../WishList/WishList";
import { UsePrivateContext } from "../PrivacyContext/PrivateContext";

const PrivateRoute = () => {
  const { user, loginRegistrationBtn, loading } = useContext(UsePrivateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      loginRegistrationBtn();
      navigate("/");
    }
  }, [user, loginRegistrationBtn, navigate, loading]);

  return user && <WishList />;
};

export default PrivateRoute;
