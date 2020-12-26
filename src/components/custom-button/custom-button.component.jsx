import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : " "} custom-btn`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
