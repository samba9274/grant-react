import { Link } from "react-router-dom";
import GiveImage from "../resources/images/Give.jpg";
import readingGirl from "../resources/images/girlReading.jpg";

export default function Home() {
  return (
    <div className="container-fluid overflowX-hidden">
      <div className="row">
        <img className="mx-auto rounded w-50 shadow" src={GiveImage} alt="" />
        <div className="row my-5">
          <div className="text-center display-4 col-1 offset-4 w-35">
            Your donations impact the world positively
          </div>
        </div>
        <div className="row">
          <Link to="/donate" className="w-auto mx-auto">
            <button className="btn btn-light shadow-lg fs-3 py-2 px-6 bg-light rounded">
              Donate
            </button>
          </Link>
        </div>
      </div>
      <div className="row px-6 gx-5 h-auto">
        <div className="col-md-6 h-auto">
          <img src={readingGirl} className="img-fluid float-end" alt="" />
        </div>
        <div className="col-md-6 row w-25 vertical-center">
          <div className="display-4 d-block">
            Helps you to explore new frontiers
          </div>
          <Link to="/aboutus" className="w-auto mx-auto d-block">
            <button className="btn btn-light shadow-lg fs-3 py-2 px-6 bg-light rounded">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
