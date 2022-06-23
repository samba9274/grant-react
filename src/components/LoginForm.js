import { Component } from "react";
import { Link } from "react-router-dom";

import md5 from "md5";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      l: false,
    };
  }
  handleLogin = (e) => {
    e.preventDefault();
    fetch(`${process.env.GRANT_BACKEND}/validate`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.email.value,
        password: md5(this.password.value),
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.jwt) {
          sessionStorage.setItem("login-status", JSON.stringify(true));
          sessionStorage.setItem("jwt", JSON.stringify(res.jwt));
          sessionStorage.setItem("userId", JSON.stringify(res.userId));
          sessionStorage.setItem("role", JSON.stringify(res.role));
          sessionStorage.setItem("l", JSON.stringify(true));
          window.location.href = "/";
        } else {
          alert("Invalid Login Credentials. Please try again.");
        }
      })
      .catch(() => {
        alert("Invalid Login Credentials. Please try again.");
      });
  };
  render() {
    return (
      <div className="w-45 mx-auto my-5 p-5 shadow rounded bg-light">
        <div className="display-4 fw-bolder text-center">Login</div>
        <form className="m-5 mt-1 p-5" onSubmit={this.handleLogin}>
          <div className="form-group my-5">
            <label className="fw-bold fs-3 mb-2">Email</label>
            <input
              className="w-100 fs-3 border-0 border-bottom border-2 bg-light border-dark"
              type="email"
              ref={(input) => (this.email = input)}
            />
          </div>
          <div className="form-group my-5">
            <label className="fw-bold fs-3 mb-2">Password</label>
            <input
              className="w-100 fs-3 border-0 border-bottom border-2 bg-light border-dark"
              type="password"
              ref={(input) => (this.password = input)}
            />
          </div>
          <div className="form-group my-5 row">
            <input
              className="btn btn-warning shadow fw-bolder rounded-pill py-4 fs-2 w-25 mx-auto"
              type="submit"
              value="Go!"
            />
          </div>
          <div className="form-group my-5 text-center fs-4">
            Not an user ?{" "}
            <Link to="/signup" className="text-decoration-none">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
