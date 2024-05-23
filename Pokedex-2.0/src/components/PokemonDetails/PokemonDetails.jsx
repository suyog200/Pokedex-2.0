import CloseIcon from "@mui/icons-material/Close";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ColorTypes } from "../../util/ColorTypes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TabComponent from "../Tabs/TabComponent";
import "./PokemonDetails.css";

export default function PokemonDetails({ selectedPokemon, handleCloseModal }) {
  const spriteUrls = Object.values(
    selectedPokemon.sprites.other["official-artwork"]
  ).filter((url) => typeof url === "string" && url !== null);

  //select colorType
  const colorType = selectedPokemon.types[0].type.name;
  const color = ColorTypes[colorType];

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
            <FavoriteBorderIcon />
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
