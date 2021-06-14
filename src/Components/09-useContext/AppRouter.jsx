import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { NavBar } from "./NavBar.jsx";

import { AboutScreen } from "./AboutScreen.jsx";
import { LoginScreen } from "./LoginScreen.jsx";
import { HomeScreen } from "./HomeScreen.jsx";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Redirect to="/" />
            {/* <Route component={HomeScreen} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
