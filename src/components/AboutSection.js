export default function AboutSection({ title, text, image, rightalign }) {
  return (
    <div className="row p-5 my-5">
      <div className={`col-md-4${rightalign ? " order-1" : " offset-md-2"}`}>
        <h1
          className={`border-${
            rightalign ? "end" : "start"
          } border-10 border-danger px-4 mb-5 text-${
            rightalign ? "end" : "start"
          }`}
        >
          {title}
        </h1>
        <h4 className={`text-${rightalign ? "end" : "start"}`}>{text}</h4>
      </div>
      <div className={`col-md-4${rightalign ? " offset-md-2" : ""}`}>
        <img className="img-fluid" src={image} alt="" />
      </div>
    </div>
  );
}
