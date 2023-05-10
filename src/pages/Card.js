import React from "react";
import "../styles/card.css";

const Card = ({ img, name, location, price, id, type, navigat }) => {
  const MAX_TEXT_LENGTH = 20;
  let truncatedText = name;
  if (name.length > MAX_TEXT_LENGTH) {
    truncatedText = name.substring(0, MAX_TEXT_LENGTH) + "...";
  }

  const MAX_LOC_LENGTH = 20;
  let truncatedLoc = location;

  if (location.length > MAX_LOC_LENGTH) {
    truncatedLoc = location.substring(0, MAX_LOC_LENGTH) + "...";
  }

  return (
    <div className="card" onClick={() => navigat(`/category/${type}/${id}`)}>
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{truncatedText}</h5>
        <p className="card-text">{truncatedLoc}</p>
        <p className="card-text">Price ( ₹ {price} )</p>
      </div>
    </div>
  );
};

export default Card;
