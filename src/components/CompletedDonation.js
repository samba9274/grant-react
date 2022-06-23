export default function IncomingDonation({
  receiverName,
  inventory,
  description,
  images,
  id,
}) {
  return (
    <div className="row my-5 border-bottom border-1 pb-5">
      <div className="col-12 col-md-6 gx-md-5">
        <div
          id={`donationImagesCarousel-${id}`}
          className="carousel carousel-dark slide shadow-lg rounded"
          data-interval="false"
        >
          <div className="carousel-inner rounded">
            {images.map((image, index) => (
              <div
                className={`carousel-item square${
                  index === 0 ? " active" : ""
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
            data-bs-target={`#donationImagesCarousel-${id}`}
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
            data-bs-target={`#donationImagesCarousel-${id}`}
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
        <div className="col-12 fs-4 mb-0">Donated to</div>
        <div className="col-12 fs-1 fw-bold mb-3">{receiverName}</div>
        <div className="col-12 fs-4 mb-2">Contains</div>
        <div className="col-12 mb-4">
          {inventory > 3 && (
            <span class="badge rounded-pill fs-6 bg-light text-dark px-5 py-2 border border-1 border-dark me-3">
              Books
            </span>
          )}
          {(inventory === 2 ||
            inventory === 3 ||
            inventory === 6 ||
            inventory === 7) && (
            <span class="badge rounded-pill fs-6 bg-light text-dark px-5 py-2 border border-1 border-dark me-3">
              Clothes
            </span>
          )}
          {(inventory === 1 ||
            inventory === 3 ||
            inventory === 5 ||
            inventory === 7) && (
            <span class="badge rounded-pill fs-6 bg-light text-dark px-5 py-2 border border-1 border-dark">
              Toys
            </span>
          )}
        </div>
        <div className="col-12 fs-4 w-100 mb-2">{description}</div>
      </div>
    </div>
  );
}
