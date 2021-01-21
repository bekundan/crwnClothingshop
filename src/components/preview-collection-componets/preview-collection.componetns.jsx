import React from "react";
import CollectionItem from "../collection-item/collection-item.components";
// import "./preview-collection.style.scss";
import {
  CollectionPreviews,
  PreviewTitle,
  PreviewImage,
} from "./preview-collection.style";
const CollectionPreview = ({ title, items }) => (
  <CollectionPreviews>
    <PreviewTitle>{title.toUpperCase()}</PreviewTitle>
    <PreviewImage>
      {items
        .filter((item, idx) => idx < 4) //this will show only 4 item//
        .map((item) => (
          ///here we show the items from shop.js
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewImage>
  </CollectionPreviews>
);

export default CollectionPreview;
