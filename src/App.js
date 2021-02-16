import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
//for route
import { Switch, Route, Redirect } from "react-router-dom";
//import the shop data
import ShopPage from "./pages/shop/shop.components";
//import the Header page
import Header from "./components/header/header.component";
//here we import the signIn and the SignUp
import SignInandSignUpPage from "./pages/signIn&signUp/sign-in-and-sign-up";
//the redux part
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";
//the checkout  page *******
import CheckOutPage from "./pages/checkout/checkout.component";

const App = ({ checkUserSession, currentUser }) => {
  //for the user after signup to show on the web and store as current user

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInandSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
