import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";
//its a high order components takes components in as arguments and modify components

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <div
    className="menu-item"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span>Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
