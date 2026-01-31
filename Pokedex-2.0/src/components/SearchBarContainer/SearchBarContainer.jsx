/* eslint-disable react/prop-types */
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ClearIcon from "@mui/icons-material/Clear";
import { fetchPokemonDataByName } from "../../util/DataFetch";

export default function SearchBarContainer({
  toggle,
  showFavorites,
  onSearch,
  onClearSearch,
}) {
  const [searchValue, setSearchValue] = useState("");

  function getSearchValue(value) {
    setSearchValue(value);
  }

  async function handleSearchClick() {
    if (!searchValue) return;

    try {
      const data = await fetchPokemonDataByName(searchValue.toLowerCase());
      console.log(data);
      if (onSearch) {
        onSearch(data);
      }
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  }

  function handleClearSearch() {
    setSearchValue("");
    if (onClearSearch) {
      onClearSearch();
    }
  }

  return (
    <div className="searchBar--container">
      <div className="searchBar-left">
        <input
          required
          type="text"
          placeholder="Search Pokemon"
          className="searchBar-input"
          value={searchValue}
          onChange={(e) => getSearchValue(e.target.value)}
        />
        <button className="btn" onClick={handleSearchClick}>
          <SearchIcon fontSize="small" />
          <span>Search</span>
        </button>
        <button className="btn" onClick={handleClearSearch}>
          <ClearIcon fontSize="small" />
          <span>Clear</span>
        </button>
      </div>
      <div className="searchBar-right">
        {showFavorites ? (
          <button className="btn" onClick={toggle}>
            <DoneOutlineIcon fontSize="small" />
            <span>Show All Pokemon</span>
          </button>
        ) : (
          <button className="btn" onClick={toggle}>
            <FavoriteIcon fontSize="small" />
            <span>My Favorites</span>
          </button>
        )}
      </div>
    </div>
  );
}
