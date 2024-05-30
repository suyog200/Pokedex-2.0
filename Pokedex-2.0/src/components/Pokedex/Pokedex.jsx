import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PokdexHeadImg from "../../assets/images/pokedex-font.png";
import PokedexLogo from "../../assets/images/logo2.png";
import Card from "../card/Card";
import SearchBarContainer from "../SearchBarContainer/SearchBarContainer";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { fetchPokemonData } from "../../util/DataFetch";
import InfoModal from "../Modal/InfoModal";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import "./Pokedex.css";

const itemsPerPage = 20;

export default function Pokedex() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["pokemon", itemsPerPage, currentPage],
    queryFn: () => fetchPokemonData(itemsPerPage, currentPage),
    enabled: !showFavorites,
  });

  useEffect(() => {
    if (showFavorites) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavoritePokemons(favorites);
    } else {
      refetch();
    }
  }, [showFavorites, refetch]);

  function handlePageChange(event, pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleCardClick(index) {
    const pokemonData = showFavorites ? favoritePokemons : data;
    setSelectedPokemon(pokemonData[index]);
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleShowFavoritesToggle() {
    setShowFavorites((prev) => !prev);
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
        <img src={PokedexLogo} alt="" className="bottom-img" />
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

  if (!showFavorites &&  data) {
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
  
  if (showFavorites) {
    content = (
      <div className="card-container">
        {favoritePokemons.length > 0 ? (
          favoritePokemons.map((pokemon, index) => (
            <Card
              key={index}
              pokemon={pokemon}
              index={index}
              onClick={handleCardClick}
            />
          ))
        ) : (
          <p>No favorites found</p>
        )}
      </div>
    );
  }


  return (
    <section id="pokedex-container">
      <div className="pokedex-header">
        <img src={PokdexHeadImg} alt="" className="title-img" />
      </div>
      {/* <SearchBarContainer onSearch={handleSearch}/> */}
      <SearchBarContainer
        toggle={handleShowFavoritesToggle}
        showFavorites={showFavorites}
      />
      {content}
      {!showFavorites && (
        <Box p={1} my={2}>
          <Pagination
            count={66}
            variant="outlined"
            onChange={handlePageChange}
            page={currentPage}
            color="primary"
          />
        </Box>
      )}
      {/* Modal */}
      {openModal && selectedPokemon && (
        <InfoModal open={openModal} handleCloseModal={handleCloseModal}>
          <PokemonDetails
            selectedPokemon={selectedPokemon}
            handleCloseModal={handleCloseModal}
          />
        </InfoModal>
      )}
    </section>
  );
}
