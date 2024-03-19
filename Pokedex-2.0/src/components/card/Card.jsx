import cardImg from "../../assets/images/cardImg.png";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card-img">
        <img src={cardImg} alt="pokemon-img" />
      </div>
      <div className="cardMain-text">
        <p className="card-title">Charmander</p>
        <span className="card-title--type">Grass</span>
      </div>
      <div className="cardMain-subText">
        <div className="cardMain-subText-1">
          <p>HP</p>
          <p>height</p>
          <p>Weight</p>
        </div>
        <div className="cardMain-subText-2">
          <p>100</p>
          <p>0.6m</p>
          <p>8.5kg</p>
        </div>
      </div>
    </div>
  );
}
