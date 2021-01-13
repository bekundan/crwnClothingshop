import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I90HvD6kaK2LSPZu2BU11qqBHsJEknYgcxBYteSRqen6LUiaMX5tzYSC5Nx54lvYOmfciIjcYADQr3jzwTzPqaS00uCSL1MSL";

  const onToken = (token) => {
    console.log(token);
    alert("payment Success");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Shop."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
