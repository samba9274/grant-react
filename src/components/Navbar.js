import { Link } from "react-router-dom";
import profileImage from "../resources/vectors/profile.svg";
import NavBookmark from "../resources/vectors/NavBookmark.svg";

export default function Navbar() {
  return (
    <nav className="w-100 text-light overflowX-hidden">
      <Link to="/">
        <img src={NavBookmark} alt="" className="px-5 img-fluid" id="NavLogo" />
      </Link>
      <ul className="list-inline float-end my-4">
        <li className="list-inline-item mx-4 fs-5 fw-bold">
          <Link to="/" className="text-light text-decoration-none">
            Home
          </Link>
        </li>
        {JSON.parse(sessionStorage.getItem("role")) !== "ADMIN" &&
          JSON.parse(sessionStorage.getItem("role")) !== "INSTITUTE" && (
            <li className="list-inline-item mx-4 fs-5 fw-bold">
              <Link to="/donate" className="text-light text-decoration-none">
                Donate
              </Link>
            </li>
          )}
        {JSON.parse(sessionStorage.getItem("role")) === "INSTITUTE" && (
          <li className="list-inline-item mx-4 fs-5 fw-bold">
            <Link to="/donations" className="text-light text-decoration-none">
              Donations
            </Link>
          </li>
        )}
        {JSON.parse(sessionStorage.getItem("role")) === "ADMIN" && (
          <>
            <li className="list-inline-item mx-4 fs-5 fw-bold">
              <Link to="/institute" className="text-light text-decoration-none">
                Institute
              </Link>
            </li>
            <li className="list-inline-item mx-4 fs-5 fw-bold">
              <Link to="/report" className="text-light text-decoration-none">
                Report
              </Link>
            </li>
          </>
        )}
        {!JSON.parse(sessionStorage.getItem("login-status")) && (
          <>
            <li className="list-inline-item mx-4 fs-5 fw-bold">
              <Link to="/login" className="text-light text-decoration-none">
                Log in
              </Link>
            </li>
            <li className="list-inline-item mx-4 fs-5 fw-bold">
              <Link to="/signup" className="text-light text-decoration-none">
                Sign up
              </Link>
            </li>
          </>
        )}
        <li className="list-inline-item mx-4 fs-5 fw-bold">
          <Link to="/aboutus" className="text-light text-decoration-none">
            About us
          </Link>
        </li>
        {JSON.parse(sessionStorage.getItem("login-status")) && (
          <li className="list-inline-item mx-4 fs-5 fw-bold dropdown">
            <img
              src={profileImage}
              className="btn rounded-circle m-0 p-0"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              alt=""
            />
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {JSON.parse(sessionStorage.getItem("role")) === "USER" && (
                <>
                  <li>
                    <Link to="/pending" className="dropdown-item">
                      Pending Donations
                    </Link>
                  </li>
                  <li>
                    <Link to="/completed" className="dropdown-item">
                      Completed Donations
                    </Link>
                  </li>
                </>
              )}
              {JSON.parse(sessionStorage.getItem("role")) === "INSTITUTE" && (
                <>
                  <li>
                    <Link to="/accepted" className="dropdown-item">
                      Accepted Donations
                    </Link>
                  </li>
                </>
              )}
              {JSON.parse(sessionStorage.getItem("role")) === "ADMIN" && (
                <>
                  <li>
                    <Link to="/reported" className="dropdown-item">
                      Reported Donations
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  className="dropdown-item"
                  onClick={() => {
                    sessionStorage.setItem(
                      "login-status",
                      JSON.stringify(false)
                    );
                    sessionStorage.removeItem("jwt");
                    sessionStorage.removeItem("userId");
                    sessionStorage.removeItem("role");
                    window.location.reload();
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        )}
      </ul>
    </nav>
  );
}
