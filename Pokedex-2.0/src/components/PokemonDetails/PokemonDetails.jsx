import CloseIcon from "@mui/icons-material/Close";

export default function PokemonDetails({selectedPokemon, handleCloseModal}) {
  return (
    <div className="modal">
      <CloseIcon className="close-icon" onClick={handleCloseModal} />
      <div className="modal-wrapper">
        <img
          className="modal-img"
          src={selectedPokemon.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <h1>{selectedPokemon.name}</h1>
      </div>
    </div>
  );
}
