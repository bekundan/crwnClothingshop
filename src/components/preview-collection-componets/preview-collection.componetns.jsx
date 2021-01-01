import React from "react";
import CollectionItem from "../collection-item/collection-item.components";
import "./preview-collection.style.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4) //this will show only 4 item//
        .map((item) => (
          ///here we show the items from shop.js
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
