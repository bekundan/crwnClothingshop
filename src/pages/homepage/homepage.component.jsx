import React from "react";
import Directory from "../../components/directory/directory.components";
import "./homepage.style.scss";

const Homepage = ({ history }) => (
  <div className="homepage">
    <Directory history={history} />
  </div>
);

export default Homepage;
