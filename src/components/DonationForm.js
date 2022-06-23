import { Component } from "react";
import ErrorAlert from "../resources/vectors/ErrorAlert.svg";

export default class DonationForm extends Component {
  state = {
    images: [],
    error: <div />,
  };
  addImage = () => {
    document.getElementById("imageUpload").click();
  };
  k = 0;
  removeImage = (id) => {
    this.state.images.splice(id, 1);
    this.setState({ images: this.state.images });
  };

  imageUpload = (e) => {
    if (this.state.images.length === 3) {
      alert("Only 3 images are allowd to be added");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.state.images.push(reader.result);
        this.setState({ images: this.state.images });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  handleDonate = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("donorUserId", 1);
    fd.append("description", this.description.value);
    fd.append(
      "inventory",
      (this.books.checked ? 4 : 0) +
        (this.clothes.checked ? 2 : 0) +
        (this.toys.checked ? 1 : 0)
    );
    for (const image of this.state.images) {
      fd.append("images[]", image);
    }
    fetch(`${process.env.REACT_APP_BACKEND}/donations`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("jwt"))}`,
      },
      body: JSON.stringify({
        donorUserId: JSON.parse(sessionStorage.getItem("userId")),
        description: this.description.value,
        inventory:
          (this.books.checked ? 4 : 0) +
          (this.clothes.checked ? 2 : 0) +
          (this.toys.checked ? 1 : 0),
        images: this.state.images,
      }),
    })
      .then((r) => {
        if (r.status === 201) {
          sessionStorage.setItem("d", JSON.stringify(true));
          window.location.href = "/";
          return;
        } else {
          this.setState({
            error: (
              <img
                src={ErrorAlert}
                alt=""
                id="ErrorAlert"
                className="position-fixed w-25 top-50 start-50"
              />
            ),
          });
          setTimeout(() => this.setState({ error: <div /> }), 2000);
          return;
        }
      })
      .catch(() => {
        this.setState({
          error: (
            <img
              src={ErrorAlert}
              alt=""
              id="ErrorAlert"
              className="position-fixed w-25 top-50 start-50"
            />
          ),
        });
        setTimeout(() => this.setState({ error: <div /> }), 2000);
        return;
      });
  };

  render() {
    return (
      <div
        id="DonationForm"
        className="w-70 mx-auto my-5 p-5 shadow rounded bg-light"
      >
        {this.state.error}
        <div className="display-4 fw-bolder text-center">Donate</div>
        <form className="m-5 p-5" onSubmit={this.handleDonate}>
          <div className="form-group my-5">
            <label className="fw-bold fs-3 mb-4">Describe your donation</label>
            <input
              className="w-100 fs-5 border-0 border-bottom border-2 bg-light p-2 border-dark"
              type="text"
              ref={(input) => (this.description = input)}
              placeholder="FirstItem:Quantity , SecondItem:Quantity. . . ."
            />
          </div>
          <div className="form-group my-5">
            <label className="fw-bold fs-3 mb-2">Images</label>
            <input
              type="file"
              accept="image/*"
              className="visually-hidden"
              id="imageUpload"
              onChange={this.imageUpload}
            />
            <div className="row my-5">
              <div
                className="FileUpload text-center my-2 mb-5 col-1"
                id="imageUploadButton"
                onClick={this.addImage}
              >
                +
              </div>
              <div className="col row my-2 mb-5">
                {this.state.images.map((image, i) => (
                  <div
                    onClick={() => this.removeImage(i)}
                    key={i}
                    className="donateImageContainer m-1"
                  >
                    <img width={100} src={image} alt="" />
                    <div className="donateImageOverlay text-center fs-3 fw-bold">
                      ✕
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="form-group my-5">
            <label className="fw-bold fs-3 mb-4">This donation contains</label>
            <br />
            <label className="checkbox-container me-3">
              Books
              <input
                type="checkbox"
                value="books"
                ref={(input) => (this.books = input)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="checkbox-container mx-3">
              Clothes
              <input
                type="checkbox"
                value="clothes"
                ref={(input) => (this.clothes = input)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="checkbox-container ms-3">
              Toys
              <input
                type="checkbox"
                toys="toys"
                ref={(input) => (this.toys = input)}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="form-group my-5">
            <input
              className="btn btn-light shadow fw-bolder rounded-pill mx-5 py-4 fs-2 w-25 float-start"
              type="button"
              value="Cancel"
            />
            <input
              className="btn btn-warning shadow fw-bolder rounded-pill mx-5 py-4 fs-2 w-25 float-end"
              type="submit"
              value="Donate"
            />
          </div>
        </form>
      </div>
    );
  }
}
