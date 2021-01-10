import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//import collection preview for the data show on the shop page
import CollectionPreview from "../../components/preview-collection-componets/preview-collection.componetns";
import { selectCollections } from "../../redux/shop/shop.selector";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
