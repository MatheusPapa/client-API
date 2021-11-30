import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import App from "./App";

const Routes = () => {
  return(
    <BrowserRouter>
        <Route component={App} path="/" exact/>
    </BrowserRouter>
  )
}

export default Routes;