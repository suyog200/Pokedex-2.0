import { useEffect, useState } from "react";
import PokdexHeadImg from "../../assets/images/pokedex-font.png";
import PokedexLogo from "../../assets/images/logo2.png";
import Card from "../card/Card";
import SearchBarContainer from "../SearchBarContainer/SearchBarContainer";
import "./Pokedex.css";

const itemsPerPage = 20;

export default function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchPokemonData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${itemsPerPage}`
      );
      const data = await response.json();
      // Extracting pokemon URLs
      const urls = data.results.map((pokemon) => pokemon.url);
      // Fetching details for each pokemon
      const pokemonDetails = await Promise.all(
        urls.map((url) => fetch(url).then((response) => response.json()))
      );
      setPokemonData(pokemonDetails);
    }

    fetchPokemonData();
  }, []);

  return (
    <section id="pokedex-container">
      <div className="pokedex-header">
        <img src={PokdexHeadImg} alt="" className="title-img" />
        <img src={PokedexLogo} alt="" className="bottom-img" />
      </div>
      <SearchBarContainer />
      {/* CardComponent */}
      <div className="card-container">
        {pokemonData.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}
