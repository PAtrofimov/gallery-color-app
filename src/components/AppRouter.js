import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { publicRoutes, RouteNames } from "../routes";

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
      <Redirect to={RouteNames.COLORS} />
    </Switch>
  );
};

export default AppRouter;
