import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-btn" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
