import React from "react";
import logo from "../../assets/icons/Layer_25.svg";
import logotip from "../../assets/icons/Pizzabek.svg";
import korzinka from "../../assets/icons/korzinka.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <header className="site-header container">
        <div className="wrapper">
          <div className="nav-start-box d-flex align-items-center">
            <img src={logo} alt="" />
            <div className="nav-end-box">
              <img className="pizzabek" src={logotip} alt="" />
              <p className="eng_mazali mb-0">
                eng mazali pitsalar faqatgina bizda
              </p>
            </div>
          </div>
          <input
            className="input"
            type="search"
            placeholder="Pitsalarni qidirish"
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
                  <span className="uzs"> 0 UZS</span>
                  <img className="img-korzina" src={korzinka} alt="" />
                  <span className="zero">0</span>
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
