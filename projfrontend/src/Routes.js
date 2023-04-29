import React from "react";
import { BrowserRouter,  Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
      </Route>
    </BrowserRouter>
  );
};

export default Routes;
