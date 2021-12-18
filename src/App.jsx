import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = () => {
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login loginUser={loginUser} />
          </Route>
          <PrivateRoute path="/home" exact isLoggedIn={isLoggedIn}>
            <Home logoutUser={logoutUser} />
          </PrivateRoute>
          <PrivateRoute path="/" exact>
            <div>Main Page</div>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
