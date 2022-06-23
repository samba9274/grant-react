import { Component } from "react";
import { Link } from "react-router-dom";
import Map from "./Map";
import ErrorAlert from "../resources/vectors/ErrorAlert.svg";
import InstituteAdded from "../resources/vectors/InstituteAdded.svg";

import md5 from "md5";

export default class AddInstitute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 18.531187112085068,
      lng: 73.865657141342,
      map: <div />,
      alert: <div />,
    };
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          map: (
            <Map
              google={this.props.google}
              center={{
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              }}
              height="300px"
              zoom={15}
            />
          ),
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        this.setState({
          map: (
            <Map
              google={this.props.google}
              center={{
                lat: 18.531187112085068,
                lng: 73.865657141342,
              }}
              height="300px"
              zoom={15}
            />
          ),
        });
      }
    );
  }

  handleSubmission = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND}/institute`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("jwt"))}`,
      },
      body: JSON.stringify({
        name: this.name.value,
        email: this.email.value,
        password: md5(this.password.value),
        mobile: this.mobile.value,
        latitude: this.state.lat,
        longitude: this.state.lng,
      }),
    })
      .then((r) => {
        console.log(r.status);
        if (r.status === 201) {
          this.setState({
            alert: (
              <img
                src={InstituteAdded}
                alt=""
                id="InstituteAdded"
                className="position-fixed w-25 bottom-0 end-0"
              />
            ),
          });
          setTimeout(() => this.setState({ alert: <div /> }), 2000);
          this.name.value = "";
          this.email.value = "";
          this.password.value = "";
          this.mobile.value = "";
          return;
        } else {
          this.setState({
            alert: (
              <img
                src={ErrorAlert}
                alt=""
                id="ErrorAlert"
                className="position-fixed w-25 top-50 start-50"
              />
            ),
          });
          setTimeout(() => this.setState({ alert: <div /> }), 2000);
          return;
        }
      })
      .catch(() => {
        this.setState({
          alert: (
            <img
              src={ErrorAlert}
              alt=""
              id="ErrorAlert"
              className="position-fixed w-25 top-50 start-50"
            />
          ),
        });
        setTimeout(() => this.setState({ alert: <div /> }), 2000);
        return;
      });
  };

  render() {
    return (
      <div className="w-45 mx-auto my-5 p-5 shadow rounded bg-light">
        {this.state.alert}
        <div className="display-4 fw-bolder text-center">Add Institute</div>
        <form className="m-5 mt-1 p-5" onSubmit={this.handleSubmission}>
          <div className="form-group my-5">
            <label className="fw-bold fs-3 mb-2">Name</label>
            <input
              className="w-100 fs-3 border-0 border-bottom border-2 border-dark"
              type="text"
              ref={(input) => (this.name = input)}
            />
          </div>
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
          <div className="form-group my-5">
            <label className="fw-bold fs-3 mb-2">Mobile</label>
            <input
              className="w-100 fs-3 border-0 border-bottom border-2 bg-light border-dark"
              type="text"
              ref={(input) => (this.mobile = input)}
            />
          </div>
          <div className="form-group my-5 row py-4">
            <label className="fw-bold fs-3 mb-2">Tell us where you live</label>
            {this.state.map}
          </div>
          <div className="form-group my-5 row">
            <input
              className="btn btn-warning shadow fw-bolder rounded-pill py-4 fs-2 w-25 mx-auto"
              type="submit"
              value="Go!"
            />
          </div>
          <div className="form-group my-5 text-center fs-4">
            Already an user ?{" "}
            <Link to="/login" className="text-decoration-none">
              Log in
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
