import React, { createContext } from "react";

export const PrivateCardInfo = createContext();

const PrivateCardContext = ({ children }) => {
  const cardValue = [1, 2, 3, 4, 5];

  return (
    <PrivateCardInfo.Provider value={cardValue}>
      {children}
    </PrivateCardInfo.Provider>
  );
};

export default PrivateCardContext;
