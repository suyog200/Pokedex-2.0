import { useEffect, useState } from "react";
import PokdexHeadImg from "../../assets/images/pokedex-font.png";
import PokedexLogo from "../../assets/images/logo2.png";
import Card from "../card/Card";
import SearchBarContainer from "../SearchBarContainer/SearchBarContainer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import "./Pokedex.css";

const itemsPerPage = 20;

export default function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPokemonData(currentPage);
  }, [currentPage]);

  const fetchPokemonData = async () => {
    setIsLoading(true);
    try {
      const offset = (currentPage - 1) * itemsPerPage;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      // Extracting pokemon URLs
      const urls = data.results.map((pokemon) => pokemon.url);
      // Fetching details for each pokemon
      const pokemonDetails = await Promise.all(
        urls.map((url) => fetch(url).then((response) => response.json()))
      );
      setPokemonData(pokemonDetails);
    } catch (error) {
      throw new Error("Failed to fetch pokemon data");
    }
    setIsLoading(false);
  };

  function handlePageChange(event,pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <section id="pokedex-container">
      <div className="pokedex-header">
        <img src={PokdexHeadImg} alt="" className="title-img" />
        <img src={PokedexLogo} alt="" className="bottom-img" />
      </div>
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
          <Card key={index} pokemon={pokemon} />
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
    </section>
  );
}
