import React from "react";
import Directory from "../../components/directory/directory.components";
import { HomePage } from "./homepage.styled";

const Homepage = ({ history }) => (
  <HomePage>
    <Directory history={history} />
  </HomePage>
);

export default Homepage;
