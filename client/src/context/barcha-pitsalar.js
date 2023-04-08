import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { API_PATH } from "../utils";

export const PizzaContext = createContext([]);

const PizzaContextComp = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API_PATH + "barcha-pitsalar")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <PizzaContext.Provider value={[data, setData]}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextComp;
