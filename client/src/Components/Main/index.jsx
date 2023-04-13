import React, { useContext, useEffect, useRef, useState } from "react";
import { API_PATH } from "../../utils";
import Card from "../Card";
import { Modal, Segmented, Space } from "antd";
import CloseIcon from "../../assets/icons/close.svg";
import { PizzaContext } from "../../context/barcha-pitsalar";
import IncrementIcon from "../../assets/icons/increment.svg";
import DecrementIcon from "../../assets/icons/decrement.svg";
import { SavatchaContext } from "../../context/savatcha";

const Main = () => {
  const [data, setData] = useContext(PizzaContext);
  const [many, setMany] = useState(1);
  const [xamiri, setXamiri] = useState("");
  const [dataSavat, setDataSavat, sanoq, setSanoq] =
    useContext(SavatchaContext);
  const [categorys, setCategorys] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const btnRef = useRef();

  const onePizza = data[localStorage.getItem("id")];
  const showModal = (id) => {
    localStorage.setItem("id", id - 1);
    setIsModalOpen(true);
  };

  const handleOk = (onePizza, evt) => {
    setIsModalOpen(false);
    setDataSavat((p) => [
      ...p,
      {
        ...onePizza,
        count: many,
        price: onePizza.price * many,
        xamir: xamiri
          ? xamiri
          : xamiri === ""
          ? onePizza.xamir[0]
          : onePizza.xamir[0],
      },
    ]);
    setSanoq({
      price: (sanoq.price += +onePizza.price * many),
      count: (sanoq.count += many),
    });
    setXamiri("");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setMany(1);
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

  const xamirs = onePizza?.xamir.map(
    (item) => item.slice(0, 1).toUpperCase() + item.slice(1)
  );

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
              <p className="onepizza-desc">{onePizza?.description}</p>
              <p className="pitsa-kattaligi">Buyurtma soni</p>
              <div className="count-box">
                <button
                  onClick={() => many > 1 && setMany(many - 1)}
                  className="count-btn"
                >
                  <img src={DecrementIcon} alt="" />
                </button>
                <p className="m-0 count-num">{many} - ta</p>
                <button onClick={() => setMany(many + 1)} className="count-btn">
                  <img src={IncrementIcon} alt="" />
                </button>
              </div>
              <p className="pitsa-kattaligi">Xamirning qalinligi</p>
              <Space direction="vertical" className="mb-3">
                <Segmented
                  defaultValue={onePizza?.xamir[0]}
                  defaultChecked={onePizza?.xamir[0]}
                  default={onePizza?.xamir[0]}
                  onChange={(e) => setXamiri(e)}
                  size="large"
                  options={onePizza && xamirs}
                />
              </Space>
              <div className="d-flex align-items-center justify-content-between">
                <p className="onepizza-price p-0 m-0">
                  {onePizza?.price * many} USD
                </p>
                <button
                  className="button"
                  onClick={(evt) => handleOk(onePizza, evt)}
                >
                  Savatga +
                </button>
              </div>
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
                  className={`barchasi ${index === 0 && "active"}`}
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
