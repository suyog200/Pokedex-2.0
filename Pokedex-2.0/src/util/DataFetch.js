

export async function fetchPokemonData(itemsPerPage, currentPage) {
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
      return pokemonDetails;
    } catch (error) {
      throw new Error("Failed to fetch pokemon data");
    }
}