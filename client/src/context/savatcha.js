import React, { useState } from "react";

export const SavatchaContext = React.createContext(null);

const SavatchaComp = ({ children }) => {
  const [dataSavat, setDataSavat] = useState([]);
  const [sanoq, setSanoq] = useState({
    price: 0,
    count: 0,
  });
  return (
    <SavatchaContext.Provider
      value={[dataSavat, setDataSavat, sanoq, setSanoq]}
    >
      {children}
    </SavatchaContext.Provider>
  );
};

export default SavatchaComp;
