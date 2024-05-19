import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PokdexHeadImg from "../../assets/images/pokedex-font.png";
import PokedexLogo from "../../assets/images/logo2.png";
import Card from "../card/Card";
import SearchBarContainer from "../SearchBarContainer/SearchBarContainer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { fetchPokemonData, fetchPokemonDataByName } from "../../util/DataFetch";
import InfoModal from "../Modal/InfoModal";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import "./Pokedex.css";

const itemsPerPage = 20;

export default function Pokedex() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["pokemon", itemsPerPage, currentPage],
    queryFn: () => fetchPokemonData(itemsPerPage, currentPage),
  });



  function handlePageChange(event, pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleCardClick(index) {
    setSelectedPokemon(data[index]);
    console.log(data[index]);
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  let content;

  if (isPending) {
    content = (
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
    );
  }

  if (isError) {
    content = (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  if (data) {
    content = (
      <div className="card-container">
        {data.map((pokemon, index) => (
          <Card
            key={index}
            pokemon={pokemon}
            index={index}
            onClick={handleCardClick}
          />
        ))}
      </div>
    );
  }

  return (
    <section id="pokedex-container">
      <div className="pokedex-header">
        <img src={PokdexHeadImg} alt="" className="title-img" />
        <img src={PokedexLogo} alt="" className="bottom-img" />
      </div>
      {/* <SearchBarContainer onSearch={handleSearch}/> */}
      <SearchBarContainer />
      {content}
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
          <PokemonDetails selectedPokemon={selectedPokemon} handleCloseModal={handleCloseModal}/>
        </InfoModal>
      )}
    </section>
  );
}
