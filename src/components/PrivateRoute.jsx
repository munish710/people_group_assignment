import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ children, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
