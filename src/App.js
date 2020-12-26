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
import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  //for the user after signup to show on the web
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        {/* //here we use the Switch to use Route */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInandSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
