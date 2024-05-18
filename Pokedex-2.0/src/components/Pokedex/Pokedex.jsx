import { useEffect, useState } from "react";
import PokdexHeadImg from "../../assets/images/pokedex-font.png";
import PokedexLogo from "../../assets/images/logo2.png";
import Card from "../card/Card";
import SearchBarContainer from "../SearchBarContainer/SearchBarContainer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { fetchPokemonData, fetchPokemonDataByName } from "../../util/DataFetch";
import InfoModal from "../Modal/InfoModal";
import CloseIcon from '@mui/icons-material/Close';
import "./Pokedex.css";

const itemsPerPage = 20;

export default function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await fetchPokemonData(itemsPerPage, currentPage);
        setPokemonData(data);
      } catch (error) {
        console.error("Failed to fetch pokemon data", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage]);


  function handlePageChange(event,pageNumber) {
    setCurrentPage(pageNumber);
  };

  function handleCardClick(index) {
    setSelectedPokemon(pokemonData[index]);
    setOpenModal(true);
  };

  function handleCloseModal() {
    setOpenModal(false);
  }



  return (
    <section id="pokedex-container">
      <div className="pokedex-header">
        <img src={PokdexHeadImg} alt="" className="title-img" />
        <img src={PokedexLogo} alt="" className="bottom-img" />
      </div>
      {/* <SearchBarContainer onSearch={handleSearch}/> */}
      <SearchBarContainer />
      {/* Loading Spinner */}
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {/* CardComponent */}
      <div className="card-container">
        {pokemonData.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} index={index} onClick={handleCardClick}/>
        ))}
      </div>
      <Box p={1} my={2}>
        <Pagination
          count={66}
          variant="outlined"
          onChange={handlePageChange}
          page={currentPage}
          color="primary"
        />
      </Box>
      {/* Modal */}
      {openModal && selectedPokemon && (
        <InfoModal open={openModal} handleCloseModal={handleCloseModal}>
          <div className="modal">
            <CloseIcon className="close-icon" onClick={handleCloseModal}/>
            <div className="modal-wrapper">
            <img className="modal-img" src={selectedPokemon.sprites.other["official-artwork"].front_default} alt="" />
            <h1>{selectedPokemon.name}</h1>
            </div>
          </div>
        </InfoModal>
      )}
    </section>
  );
}
