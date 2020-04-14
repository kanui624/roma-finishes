import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Roma from "../components/Roma";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Roma} />
    </Switch>
  </Router>
);
