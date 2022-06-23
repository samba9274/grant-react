import { Link } from "react-router-dom";
import Logo from "../resources/vectors/Logo.svg";

export default function Footer() {
  return (
    <footer className="container-fluid position-relative bg-dark text-light m-0 p-5">
      <div className="row">
        <div className="col-sm" />
        <img className="col-sm-2" src={Logo} alt="" />
        <div className="col-sm" />
      </div>
      <div className="row my-5 fw-bold text-center">
        <div className="col-sm"></div>
        <div className="col-xs-12 col-sm fs-5">
          <Link to="/" className="text-light text-decoration-none">
            Home
          </Link>
        </div>
        <div className="col-xs-12 col-sm fs-5">
          <Link to="/donate" className="text-light text-decoration-none">
            Donate
          </Link>
        </div>
        <div className="col-xs-12 col-sm fs-5">
          <Link to="/login" className="text-light text-decoration-none">
            Log in
          </Link>
        </div>
        <div className="col-xs-12 col-sm fs-5">
          <Link to="/signup" className="text-light text-decoration-none">
            Sign up
          </Link>
        </div>
        <div className="col-xs-12 col-sm fs-5">
          <Link to="/aboutus" className="text-light text-decoration-none">
            About us
          </Link>
        </div>
        <div className="col-sm"></div>
      </div>
      <div className="row text-center">
        <div className="col-sm"></div>
        <div className="col-sm">
          <p className="m-5">© Copyright Grant</p>
        </div>
        <div className="col-sm"></div>
      </div>
    </footer>
  );
}
