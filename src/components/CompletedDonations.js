import { Component } from "react";
import CompletedDonation from "./CompletedDonation";

export default class CompletedDonationsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
    };
  }
  componentDidMount() {
    fetch(
      `${process.env.GRANT_BACKEND}/donations/COMPLETED?userId=${JSON.stringify(
        sessionStorage.getItem("userId")
      )}`
    )
      .then((r) => r.json())
      .then((donations) => this.setState(donations));
  }

  render() {
    return (
      <div
        id="CompletedDonations"
        className="container overflowX-hidden position-relative"
      >
        {this.state.donations.map((donation, index) => (
          <CompletedDonation
            key={index}
            id={index}
            receiverName={donation.receiverName}
            inventory={donation.inventory}
            description={donation.description}
            images={donation.images}
          />
        ))}
      </div>
    );
  }
}
