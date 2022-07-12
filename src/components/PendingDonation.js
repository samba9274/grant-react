import { Component } from "react";

export default class IncomingDonation extends Component {
  handleRemove = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND}/donations/${this.props.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("jwt"))}`,
      },
      body: JSON.stringify({
        userId: sessionStorage.getItem("userId"),
      }),
    }).then((r) => window.location.reload());
  };
  render() {
    return (
      <div className="row my-5 border-bottom border-1 pb-5">
        <div className="col-12 col-md-6 gx-md-5">
          <div
            id={`donationImagesCarousel-${this.props.id}`}
            className="carousel carousel-dark slide shadow-lg rounded"
            data-interval="false"
          >
            <div className="carousel-inner rounded">
              {this.props.images.map((image, index) => (
                <div
                  className={`carousel-item square${index === 0 ? " active" : ""
                    }`}
                >
                  <img
                    src={image}
                    className="d-block img-fluid rounded w-100 h-100 position-absolute"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#donationImagesCarousel-${this.props.id}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon rounded-circle bg-dark"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#donationImagesCarousel-${this.props.id}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon rounded-circle bg-dark"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="col-12 fs-4 mb-2">Contains</div>
          <div className="col-12 mb-4">
            {this.props.inventory > 3 && (
              <span class="badge rounded-pill fs-6 bg-light text-dark px-5 py-2 border border-1 border-dark me-3">
                Books
              </span>
            )}
            {(this.props.inventory === 2 ||
              this.props.inventory === 3 ||
              this.props.inventory === 6 ||
              this.props.inventory === 7) && (
                <span class="badge rounded-pill fs-6 bg-light text-dark px-5 py-2 border border-1 border-dark me-3">
                  Clothes
                </span>
              )}
            {(this.props.inventory === 1 ||
              this.props.inventory === 3 ||
              this.props.inventory === 5 ||
              this.props.inventory === 7) && (
                <span class="badge rounded-pill fs-6 bg-light text-dark px-5 py-2 border border-1 border-dark">
                  Toys
                </span>
              )}
          </div>
          <div className="col-12 fs-4 w-100 mb-2">{this.props.description}</div>
          <div className="col-12">
            <button
              onClick={this.handleRemove}
              className="btn border border-1 border-dark px-5 py-2 bg-dark text-light me-3 mb-3"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
