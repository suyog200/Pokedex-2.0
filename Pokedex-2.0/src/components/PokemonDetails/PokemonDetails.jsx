/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ColorTypes } from "../../util/ColorTypes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import TabComponent from "../Tabs/TabComponent";
import "./PokemonDetails.css";

export default function PokemonDetails({ selectedPokemon, handleCloseModal }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favorites.some((pokemon) => pokemon.id === selectedPokemon.id);
    setIsFavorite(isFav);
  }, [selectedPokemon.id]);

  const spriteUrls = Object.values(
    selectedPokemon.sprites.other["official-artwork"]
  ).filter((url) => typeof url === "string" && url !== null);

  //select colorType
  const colorType = selectedPokemon.types[0].type.name;
  const color = ColorTypes[colorType];

  const updateLocalStorage = (newIsFavorite) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (newIsFavorite) {
      favorites.push(selectedPokemon);
    } else {
      favorites = favorites.filter(
        (pokemon) => pokemon.id !== selectedPokemon.id
      );
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };


  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => {
      const newIsFavorite = !prevIsFavorite;
      updateLocalStorage(newIsFavorite);
      return newIsFavorite;
    });
  };

  return (
    <div className="modal">
      <CloseIcon className="close-icon" onClick={handleCloseModal} />
      <div className="modal-wrapper">
        <div className="modal-wrapper--left">
          <div className="carousel">
            <Carousel style={{ width: "100%" }}>
              {spriteUrls.map((url, index) => (
                <div key={index}>
                  <img src={url} alt={`Sprite ${index}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div
          className="modal-wrapper--right"
          style={{ backgroundColor: color }}
        >
          <div className="card-header">
            <p>#{selectedPokemon.id}</p>
            {isFavorite ? (
              <FavoriteIcon onClick={handleFavoriteClick} />
            ) : (
              <FavoriteBorderIcon onClick={handleFavoriteClick} />
            )}
          </div>
          <div className="card-header--title">
            <h1>{selectedPokemon.name}</h1>
            <div className="card-pokemon--types">
              {selectedPokemon.types.map((type, index) => (
                <span key={index}>{type.type.name}</span>
              ))}
            </div>
          </div>
          <div className="card-tabs">
            <TabComponent selectedPokemon={selectedPokemon} />
          </div>
        </div>
      </div>
    </div>
  );
}
