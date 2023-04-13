import React from "react";

const Card = ({ valu, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(valu.id)}>
      <div className="card-body">
        <div className="img-box">
          <img
            className="image"
            src={valu.image}
            alt={valu.description}
            width="350px"
          />
        </div>
        <div className="bottom-box">
          <div>
            <p className="card-title">{valu.title}</p>
            <p className="card-text">{valu.description}</p>
          </div>
          <span className="price">{valu.price} USD</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
