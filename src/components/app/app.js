import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, NotFoundPage, LoginPage } from "../pages";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <NotFoundPage />
    </Switch>
  );
}
