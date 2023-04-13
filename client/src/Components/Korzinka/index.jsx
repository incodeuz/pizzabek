import React, { useContext, useState } from "react";
import { SavatchaContext } from "../../context/savatcha";
import IncrementIcon from "../../assets/icons/increment.svg";
import DecrementIcon from "../../assets/icons/decrement.svg";

const Korzinka = () => {
  const [many, setMany] = useState(1);
  const [dataSavat, setDataSavat] = useContext(SavatchaContext);
  return (
    <div className="top-box">
      <section className="hero-secion">
        <div className="hero-wrapper container d-flex align-items-center">
          <div className="korzinka-pitsa">
            {dataSavat?.map((onePissa) => (
              <div className="one-pitsa d-flex justify-content-between align-items-center">
                <div className="one-pitsa-left d-flex align-items-center">
                  <img width="140px" src={onePissa?.image} alt="" />
                  <div>
                    <h3 className="one-pitsa-title p-0 m-0">
                      {onePissa?.title}
                    </h3>
                  </div>
                </div>
                <div className="one-pitsa-right d-flex flex-column align-items-end gap-3">
                  <p className="one-pitsa-price p-0 m-0">
                    {onePissa?.price && onePissa?.price + " USD"}
                  </p>
                  <div
                    style={{
                      margin: "0",
                      transform: "scale(0.8) translateX(22px)",
                    }}
                    className="count-box m-0"
                  >
                    <button
                      onClick={() => many > 1 && setMany(many - 1)}
                      className="count-btn"
                    >
                      <img src={DecrementIcon} alt="" />
                    </button>
                    <p className="m-0 count-num">{many} - ta</p>
                    <button
                      onClick={() => setMany(many + 1)}
                      className="count-btn"
                    >
                      <img src={IncrementIcon} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="promokod"></div>
        </div>
      </section>
    </div>
  );
};

export default Korzinka;
