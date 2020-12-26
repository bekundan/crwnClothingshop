import React from "react";
import { Link } from "react-router-dom";
import "./header.componetnts.style.scss";
//import logo
import { ReactComponent as Logo } from "../../assets/iconfinder_Tilda_Icons_1ed_discount_3586369.svg";
import { auth } from "../../firebase/firebase.utils";
const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGNOUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGNIN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
