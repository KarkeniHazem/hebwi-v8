import React from "react";
import { Route, Redirect } from "react-router-dom";
export default function AdminRoute({ component: Component, ...rest }) {
  const isAdmin = localStorage.getItem("isadmin");
  if (isAdmin == "true") {
    return <Route component={Component} {...rest} />;
  } else {
    return <Redirect to="/profil/" />;
  }
}



