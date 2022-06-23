import React from "react";
import { Route, Redirect } from "react-router-dom";
export default function SecuredRouteInstitute(props) {
  return (
    <Route
      path={props.path}
      render={(data) =>
        !JSON.parse(sessionStorage.getItem("login-status")) ? (
          <props.component {...data} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}
