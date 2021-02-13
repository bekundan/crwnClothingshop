import React from "react";
import { connect } from "react-redux";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from "./header.style";
//import logo
import { ReactComponent as Logo } from "../../assets/online-shop.svg";
//import auth for the user if signIn then show signOut Button on the NavBar
import { auth } from "../../firebase/firebase.utils";
import { signOutStart } from "../../redux/user/user.action";
///import cart
import CartIcon from "../cart-icon/cart-icon.component";
//cart dropdown
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>SIGNOUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGNIN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

//we got the state value in const

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });
//*****another way with redux selector */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
