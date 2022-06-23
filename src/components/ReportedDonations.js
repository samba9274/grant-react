import { Component } from "react";
import ReportedDonation from "./ReportedDonation";

export default class ReportedDonations extends Component {
  constructor(props) {
    super(props);
    this.state = { donations: [] };
  }
  componentDidMount() {
    fetch(`${process.env.GRANT_BACKEND}/reported`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("jwt"))}`,
      },
    })
      .then((d) => d.json())
      .then((dons) => {
        this.setState({ donations: dons.donations });
      });
  }
  render() {
    return (
      <div
        id="ReportedDonations"
        className="container overflowX-hidden position-relative"
      >
        {this.state.donations.map((donation, index) => (
          <ReportedDonation
            key={index}
            id={donation.donationId}
            donorName={donation.donor.name}
            donorMobile={donation.donor.mobile}
            donorLat={donation.donor.latitude}
            donorLng={donation.donor.longitude}
            description={donation.description}
            inventory={donation.inventory}
            images={donation.images}
          />
        ))}
      </div>
    );
  }
}
