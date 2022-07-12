export default function ReportedDonation(props) {
  const handleRemove = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND}/donations/${props.id}`, {
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
  return (
    <div className="row my-5 border-bottom border-1 pb-5">
      <div className="col-12 col-md-6 gx-md-5">
        <div
          id={`donationImagesCarousel-${props.id}`}
          className="carousel carousel-dark slide shadow-lg rounded"
          data-interval="false"
        >
          <div className="carousel-inner rounded">
            {props.images.map((image, index) => (
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
            data-bs-target={`#donationImagesCarousel-${props.id}`}
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
            data-bs-target={`#donationImagesCarousel-${props.id}`}
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
        <div className="col-12 fs-4 mb-0">Donation by</div>
        <div className="col-12 fs-1 fw-bold mb-3">{props.donorName}</div>
        <div className="col-12 fs-5 mb-3">
          {props.donorMobile}, ({props.donorLat}, {props.donorLng})
        </div>
        <div className="col-12 fs-4 mb-2">Contains</div>
        <div className="col-12 mb-4">
          {props.inventory > 3 && (
            <span class="badge rounded-pill fs-6 bg-light text-dark px-5 py-2 border border-1 border-dark me-3">
              Books
            </span>
          )}
          {(props.inventory === 2 ||
            props.inventory === 3 ||
            props.inventory === 6 ||
            props.inventory === 7) && (
              <span class="badge rounded-pill fs-6 bg-light text-dark px-5 py-2 border border-1 border-dark me-3">
                Clothes
              </span>
            )}
          {(props.inventory === 1 ||
            props.inventory === 3 ||
            props.inventory === 5 ||
            props.inventory === 7) && (
              <span class="badge rounded-pill fs-6 bg-light text-dark px-5 py-2 border border-1 border-dark">
                Toys
              </span>
            )}
        </div>
        <div className="col-12 fs-4 w-100 mb-2">{props.description}</div>
        <div className="col-12">
          <button
            onClick={handleRemove}
            className="btn border border-1 border-dark px-5 py-2 bg-dark text-light me-3 mb-3"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
