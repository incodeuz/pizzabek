import React, { useContext, useEffect, useRef, useState } from "react";
import { API_PATH } from "../../utils";
import Card from "../Card";
import { Modal } from "antd";
import CloseIcon from "../../assets/icons/close.svg";
import { PizzaContext } from "../../context/barcha-pitsalar";

const Main = () => {
  const [data, setData] = useContext(PizzaContext);
  const btnRef = useRef();
  const [categorys, setCategorys] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (id) => {
    localStorage.setItem("id", id - 1);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
  const onePizza = data[localStorage.getItem("id")];
  console.log(onePizza);
  return (
    <div>
      <Modal className="modalStyle" open={isModalOpen} onCancel={handleCancel}>
        <div>
          <div className="close-box">
            <img
              onClick={handleCancel}
              src={CloseIcon}
              alt=""
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="modalni-biri">
            <div className="img-boxx">
              <img src={onePizza?.image} alt="" />
            </div>
            <div className="modalni-ikkisi">
              <h2>{onePizza?.title}</h2>
              <>
                <p>{onePizza?.price}</p>
                <button onClick={handleOk}>Savatchaga qoshish</button>
              </>
            </div>
          </div>
        </div>
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
