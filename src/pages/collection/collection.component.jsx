import React from "react";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.components";
import { connect } from "react-redux";
//here we define the url path when we search the exact item and show them the exact product
//styled component
import {
  CollectionPages,
  CollectionTitles,
  CollectionItems,
} from "./collection.style";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPages>
      <CollectionTitles>{title}</CollectionTitles>
      <CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionPages>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
