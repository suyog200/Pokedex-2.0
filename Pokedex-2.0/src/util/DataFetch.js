import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

// Purpose: Fetching data from the PokeAPI.
export async function fetchPokemonData(itemsPerPage, currentPage) {
      const offset = (currentPage - 1) * itemsPerPage;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`, {
          method: "GET",
        }
      );

      if(!response.ok) {
        const error = new Error("Failed to fetch pokemon data");
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

      const data = await response.json();
      // Extracting pokemon URLs
      const urls = data.results.map((pokemon) => pokemon.url);
      // Fetching details for each pokemon
      const pokemonDetails = await Promise.all(
        urls.map((url) => fetch(url).then((response) => response.json()))
      );
      return pokemonDetails;
    }


// Fetch pokemon data by name
export async function fetchPokemonDataByName(selectedPokemon) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
    // const response = await fetch(`https://pokemon-search-api.onrender.com/pokemon/${pokemonName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Pokemon not found. Please try again or enter correct name.");
  }
};