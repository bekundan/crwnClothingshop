import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
//for route
import { Switch, Route } from "react-router-dom";
//import the shop data
import ShopPage from "./pages/shop/shop.components";
//import the Header page
import Header from "./components/header/header.componetn";
//here we import the signIn and the SignUp
import SignInandSignUpPage from "./pages/signIn&signUp/sign-in-and-sign-up";
function App() {
  return (
    <div>
      {/* //here we use the Switch to use Route */}
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInandSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
