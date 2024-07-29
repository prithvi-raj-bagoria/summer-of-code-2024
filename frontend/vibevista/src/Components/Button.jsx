import React from "react";

const Button = ({ text, style, width, img = null, imgwidth }) => {
  return (
    <button className={style} style={{ width: width }}>
      {img && <img src={img} style={{ width: imgwidth }} />}
      {text && text}
    </button>
  );
};

export default Button;
