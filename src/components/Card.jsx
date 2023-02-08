import gps from "../assets/gps.svg";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.imageUrl} alt="frontier" />

      <div className="text-box">
        <div className="tag">
          <img className="gps-icon" src={gps} alt="gps logo" />
          <p className="country">{props.location}</p>
          <a href={props.googleMapsUrl}>view on google maps</a>
        </div>
        <h2 className="card-place">{props.title}</h2>
        <p className="card-dates">
          <span>{props.startDate}</span> - <span>{props.endDate}</span>
        </p>
        <p className="card-paragraph">{props.description}</p>
      </div>
    </div>
  );
}
