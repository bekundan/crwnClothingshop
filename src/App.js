import React from "react";
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
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
//the redux part
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
//the checkout  page *******
import CheckOutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
  //for the user after signup to show on the web and store as current user
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      //here we set the method to add collection to firestore
      // addCollectionAndDocuments(
      //   "collection",
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        {" "}
        {/* //here we use the Switch to use Route */} <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />{" "}
          <Route path="/shop" component={ShopPage} />{" "}
          <Route exact path="/checkout" component={CheckOutPage} />{" "}
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInandSignUpPage />
              )
            }
          />{" "}
        </Switch>{" "}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
