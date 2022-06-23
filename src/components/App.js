import DonationForm from "./DonationForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Aboutus from "./Aboutus";
import IncomingDonationsPage from "./IncomingDonationsPage";
import CompletedDonationsPage from "./CompletedDonations";
import PendingDonationsPage from "./PendingDonations";
import SecuredRoute from "./SecuredRoute";
import SecuredRouteUser from "./SecuredRouteUser";
import SecuredRouteInstitute from "./SecuredRouteInstitute";
import AddInstitute from "./AddInstitute";
import SecuredRouteAdmin from "./SecuredRouteAdmin";
import DonationCreated from "../resources/vectors/DonationCreated.svg";
import LoginCreated from "../resources/vectors/UserAuthenticated.svg";
import UserCreated from "../resources/vectors/UserAdded.svg";
import { Component } from "react";
import AcceptedDonations from "./AcceptedDonations";
import ReportedDonations from "./ReportedDonations";
import Report from "./Report";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { l: false };
  }
  componentDidMount() {
    if (sessionStorage.getItem("l")) {
      sessionStorage.removeItem("l");
      document.getElementById("LoginAlert").classList.remove("alert-hidden");
      setTimeout(
        () =>
          document.getElementById("LoginAlert").classList.add("alert-hidden"),
        2000
      );
    }

    if (sessionStorage.getItem("u")) {
      sessionStorage.removeItem("u");
      document.getElementById("UserAlert").classList.remove("alert-hidden");
      setTimeout(
        () =>
          document.getElementById("UserAlert").classList.add("alert-hidden"),
        2000
      );
    }

    if (sessionStorage.getItem("d")) {
      sessionStorage.removeItem("d");
      document.getElementById("DonationAlert").classList.remove("alert-hidden");
      setTimeout(
        () =>
          document
            .getElementById("DonationAlert")
            .classList.add("alert-hidden"),
        2000
      );
    }
  }

  render() {
    return (
      <div className="app montserrat">
        <img
          src={DonationCreated}
          alt=""
          id="DonationAlert"
          className="position-fixed w-25 bottom-0 end-0 alert-hidden"
        />
        <img
          src={LoginCreated}
          alt=""
          id="LoginAlert"
          className="position-fixed w-25 bottom-0 end-0 alert-hidden"
        />
        <img
          src={UserCreated}
          alt=""
          id="UserAlert"
          className="position-fixed w-25 bottom-0 end-0 alert-hidden"
        />
        <BrowserRouter>
          <Navbar />
          <div id="AppContainer" className="mb-5 pb-5">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <SecuredRouteUser path="/donate" component={DonationForm} />
              <SecuredRoute path="/login" component={LoginForm} />
              <SecuredRoute path="/signup" component={SignUpForm} />
              <Route exact path="/aboutus">
                <Aboutus />
              </Route>
              <SecuredRouteInstitute
                path="/donations"
                component={IncomingDonationsPage}
              />
              <SecuredRouteInstitute
                path="/accepted"
                component={AcceptedDonations}
              />
              <SecuredRouteAdmin
                path="/reported"
                component={ReportedDonations}
              />
              <SecuredRouteAdmin path="/report" component={Report} />
              <SecuredRouteUser
                path="/completed"
                component={CompletedDonationsPage}
              />
              <SecuredRouteUser
                path="/pending"
                component={PendingDonationsPage}
              />
              <SecuredRouteAdmin path="/institute" component={AddInstitute} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
