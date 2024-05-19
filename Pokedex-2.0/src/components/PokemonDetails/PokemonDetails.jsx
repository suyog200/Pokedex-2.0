import CloseIcon from "@mui/icons-material/Close";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ColorTypes } from "../../util/ColorTypes";
import "./PokemonDetails.css";

export default function PokemonDetails({ selectedPokemon, handleCloseModal }) {
  const spriteUrls = Object.values(selectedPokemon.sprites.other['official-artwork']).filter(
    (url) => typeof url === "string" && url !== null
  );

  //select colorType
  const colorType = selectedPokemon.types[0].type.name;
  const color = ColorTypes[colorType];

  return (
    <div className="modal">
      <CloseIcon className="close-icon" onClick={handleCloseModal} />
      <div className="modal-wrapper">
        <div className="modal-wrapper--left">
          <Carousel style={{width: '100%'}}>
            {spriteUrls.map((url, index) => (
              <div key={index}>
                <img src={url} alt={`Sprite ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="modal-wrapper--right" style={{backgroundColor: color}}>
          <h1>{selectedPokemon.name}</h1>
        </div>
      </div>
    </div>
  );
}
