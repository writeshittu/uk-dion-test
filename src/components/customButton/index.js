import React from "react";
import "./custombtn.css";

const Button = ({ children, colored, ...otherProps }) => {
  return (
    <button
      className={`${colored ? "orangeBackgrnd" : null} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
