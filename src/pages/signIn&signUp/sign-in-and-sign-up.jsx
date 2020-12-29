import React from "react";
//the signIn from
import SignIn from "../../components/sign-in/sign-in.components";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.style.scss";

const SignInandSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInandSignUpPage;
