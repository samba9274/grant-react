export default function EmbedMap({ lat, lng }) {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          title="UserLocation"
          width="500"
          height="500"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${lat},${lng}&t=k&z=15&ie=UTF8&iwloc=&output=embed`}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <br />
      </div>
    </div>
  );
}
