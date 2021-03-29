import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Home from "./containers/Home";
import About from "./components/About";
import Car from "./components/Car";
import Login from "./components/Login";
import { Component } from "react";

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      path="/about"
      render={() => (checkAuth() ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <ProtectedRoute path="/about" component={About} />
      <Route path="/car/:id" component={Car} />
    </Switch>
  );
};

export default Router;
