import EmbedMap from "./EmbedMap";
export default function UserInfo({ name, lat, lng, mobile }) {
  return (
    <div className="position-fixed top-50 start-50 translate-center bg-light w-content rounded overflowX-hidden shadow-lg m-0 p-0">
      <div className="col-12">
        <EmbedMap lat={lat} lng={lng} />
      </div>
      <div className="row m-2">
        <div className="col-12 fs-4 text-center">
          {name} : {mobile}
        </div>
      </div>
      <button
        type="button"
        class="btn btn-light border border-dark border-1 position-relative start-50 translateX-center my-2"
        onClick={() => window.location.reload()}
      >
        Close
      </button>
    </div>
  );
}
