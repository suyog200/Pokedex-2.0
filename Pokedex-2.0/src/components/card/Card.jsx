import {ColorTypes} from "../../util/ColorTypes";
import "./Card.css";

export default function Card({pokemon, index, onClick}) {

  const pokemonCard = {
    name: pokemon.name,
    types: pokemon.types,
    hp: pokemon.stats[0].base_stat,
    height: pokemon.height,
    weight: pokemon.weight,
    img: pokemon.sprites.other['showdown'].front_default,
  }

  function handleClick() {
    onClick(index);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-img">
        <img src={pokemonCard.img} alt="pokemon-img" />
      </div>
      <div className="cardMain-text">
        <p className="card-title">{pokemonCard.name}</p>
          {pokemonCard.types.map((type,index) => (
          <span 
          key={index} 
          className="card-title--type"
          style={{backgroundColor: ColorTypes[type.type.name]}}
          >{type.type.name}</span>
          ))}
      </div>
      <div className="cardMain-subText">
        <div className="cardMain-subText-1">
          <p>Base HP</p>
          <p>Height</p>
          <p>Weight</p>
        </div>
        <div className="cardMain-subText-2">
          <p>{pokemonCard.hp}</p>
          <p>{pokemonCard.height} m</p>
          <p>{pokemonCard.weight} Kg</p>
        </div>
      </div>
    </div>
  );
}
