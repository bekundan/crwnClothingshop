import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.componetnts.style.scss";
//import logo
import { ReactComponent as Logo } from "../../assets/online-shop.svg";
//import auth for the user if signIn then show signOut Button on the NavBar
import { auth } from "../../firebase/firebase.utils";
///import cart
import CartIcon from "../cart-icon/cart-icon.component";
//cart dropdown
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

//we got the state value in const

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
