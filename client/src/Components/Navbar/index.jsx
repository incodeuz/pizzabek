import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/icons/Layer_25.svg";
import korzinka from "../../assets/icons/korzinka.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { PizzaContext } from "../../context/barcha-pitsalar";
import { API_PATH } from "../../utils";
import { SavatchaContext } from "../../context/savatcha";
const Navbar = () => {
  const { pathname } = useLocation();
  const [dataSavat, setDataSavat, sanoq, setSanoq] =
    useContext(SavatchaContext);

  const [, setData] = useContext(PizzaContext);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(API_PATH + "barcha-pitsalar")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((error) => console.log(error));
  }, []);

  const searchPizzas = (e) => {
    return setData(
      datas.filter((value) =>
        value.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  console.log(dataSavat);
  return (
    <>
      <header className="site-header container">
        <div className="wrapper">
          <div className="nav-start-box d-flex align-items-center">
            <img src={logo} alt="" />
            <div className="nav-end-box">
              <p className="pizzabek">PIZZABEK</p>
              <p className="eng_mazali">eng mazali pitsalar faqatgina bizda</p>
            </div>
          </div>
          <input
            className="input"
            type="text"
            placeholder="Pitsalarni qidirish"
            onChange={(e) => searchPizzas(e)}
          />
          <div className="nav-start-box d-flex align-items-center">
            {pathname === "/korzinka" ? (
              <Link to="/">
                <button className="btns" type="button">
                  <span className="text-light">← Ortga</span>
                </button>
              </Link>
            ) : (
              <Link to="/korzinka">
                <button className="btns" type="button">
                  <span className="uzs"> {sanoq.price} USD</span>
                  <img className="img-korzina" src={korzinka} alt="" />
                  <span className="zero">{sanoq.count}</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
