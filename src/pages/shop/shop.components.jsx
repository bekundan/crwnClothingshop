import React from "react";
import ShopData from "./shop.data";
//import collection preview for the data show on the shop page
import CollectionPreview from "../../components/preview-collection-componets/preview-collection.componetns";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: ShopData,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
