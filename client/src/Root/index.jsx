import React from "react";
import { Route, Routes } from "react-router-dom";
import Korzinka from "../Components/Korzinka/";
import Main from "../Components/Main/";
import Navbar from "../Components/Navbar";

const root = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/korzinka" element={<Korzinka />} />
      </Routes>
    </>
  );
};

export default root;
