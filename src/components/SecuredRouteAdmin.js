import React from "react";
import { Route, Redirect } from "react-router-dom";
export default function SecuredRouteAdmin(props) {
  return (
    <Route
      path={props.path}
      render={(data) =>
        JSON.parse(sessionStorage.getItem("login-status")) &&
        JSON.parse(sessionStorage.getItem("role")) === "ADMIN" ? (
          <props.component {...data} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}
