import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
//for route
import { Switch, Route } from "react-router-dom";

const Hatspage = () => (
  <div>
    <h1>Hats not here</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* //here we use the Switch to use Route */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
