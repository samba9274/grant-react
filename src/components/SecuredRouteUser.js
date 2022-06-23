import React from "react";
import { Route, Redirect } from "react-router-dom";
export default function SecuredRouteUser(props) {
  return (
    <Route
      path={props.path}
      render={(data) =>
        JSON.parse(sessionStorage.getItem("login-status")) &&
        JSON.parse(sessionStorage.getItem("role")) === "USER" ? (
          <props.component {...data} setDonation={props.setDonation} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}
