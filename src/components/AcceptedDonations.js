import { Component } from "react";
import AcceptedDonation from "./AcceptedDonation";

export default class AcceptedDonations extends Component {
  constructor(props) {
    super(props);
    this.state = { donations: [] };
  }
  componentDidMount() {
    fetch(
      `${process.env.REACT_APP_BACKEND}/accepted/${sessionStorage.getItem("userId")}`
    )
      .then((d) => d.json())
      .then((dons) => {
        this.setState({ donations: dons.donations });
      });
  }
  render() {
    return (
      <div
        id="AcceptedDonations"
        className="container overflowX-hidden position-relative"
      >
        {this.state.donations.map((donation, index) => (
          <AcceptedDonation
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
