import React, { useEffect, useRef, useState } from "react";
import { API_PATH } from "../../utils";
import Card from "../Card";
import { Modal } from "antd";
import { NavLink } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState(null);
  const btnRef = useRef();
  const [categorys, setCategorys] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch(API_PATH + "barcha-pitsalar")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(API_PATH + "categorys")
      .then((response) => response.json())
      .then((data) => setCategorys(data))
      .catch((error) => console.log(error));
  }, []);

  const sortByCategorys = (key, index) => {
    const classNamecha = document.getElementsByClassName("barchasi");
    categorys.forEach((_, ind) => {
      ind === index
        ? classNamecha[ind].classList.add("active")
        : classNamecha[ind].classList.remove("active");
    });
    fetch(API_PATH + key)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <section className="hero-secion">
        <div className="hero-wrapper container main-box">
          <div className="top-top-box">
            {categorys &&
              categorys?.map((category, index) => (
                <button
                  ref={btnRef}
                  key={index}
                  onClick={() => sortByCategorys(category.key, index)}
                  className="barchasi"
                >
                  {category?.title}
                </button>
              ))}
          </div>
          <h1 className="main-title">Barcha pitsalar</h1>
          <div className="top-box">
            {data &&
              data.map((valu, index) => (
                <Card onClick={showModal} key={index} valu={valu} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
