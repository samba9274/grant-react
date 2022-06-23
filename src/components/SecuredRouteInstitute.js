import React from "react";
import { Route, Redirect } from "react-router-dom";
export default function SecuredRouteInstitute(props) {
  return (
    <Route
      path={props.path}
      render={(data) =>
        JSON.parse(sessionStorage.getItem("login-status")) &&
        JSON.parse(sessionStorage.getItem("role")) === "INSTITUTE" ? (
          <props.component {...data} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}
