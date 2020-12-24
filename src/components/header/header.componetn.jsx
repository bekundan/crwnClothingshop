import React from "react";
import { Link } from "react-router-dom";
import "./header.componetnts.style.scss";
//import logo
import { ReactComponent as Logo } from "../../assets/iconfinder_Tilda_Icons_1ed_discount_3586369.svg";
const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
