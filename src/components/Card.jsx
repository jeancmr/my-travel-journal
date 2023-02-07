import gps from "../assets/gps.svg";

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://source.unsplash.com/WLxQvbMyfas"
        alt="frontier"
      />

      <div className="text-box">
        <div className="tag">
          <img className="gps-icon" src={gps} alt="gps logo" />
          <p className="country">japan</p>
          <a href="#">view on google maps</a>
        </div>
        <h2 className="card-place">Mount Fuji</h2>
        <span className="card-dates">12 Jan, 2021 - 24 Jan, 2021</span>
        <p className="card-paragraph">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
