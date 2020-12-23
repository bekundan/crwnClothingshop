import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
//for route
import { Switch, Route } from "react-router-dom";
//import the shop data
import ShopPage from "./pages/shop/shop.components";

function App() {
  return (
    <div>
      {/* //here we use the Switch to use Route */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
