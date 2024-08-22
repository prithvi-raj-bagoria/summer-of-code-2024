import React from "react";

import google from "../assets/images/google.png";
const Card = ({
  img,
  imgwidth = "30%",
  title = "Item Name",
  text = "Item Price",
  width = "20%",
}) => {
  return (
    <div
      className="m-1 rounded-4 shadow shadow-md flex-lg-grow-0 flex-grow-1"
      style={{ width: width, maxWidth: "100%" }}
    >
      <div className="card text-center">
        <div className="card-img-top text-center bg-secondary ">
          <img
            src={img}
            alt="Error"
            style={{ width: imgwidth, height: width }}
          />
        </div>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
