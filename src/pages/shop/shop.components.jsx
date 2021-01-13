import React from "react";
import { Route } from "react-router-dom";

//import collection preview for the data show on the shop page
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
