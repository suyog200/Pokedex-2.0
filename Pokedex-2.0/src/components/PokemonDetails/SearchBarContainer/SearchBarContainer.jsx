import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBarContainer({onSearch}) {
  const [searchValue, setSearchValue] = useState("");

  function getSearchValue(value) {
    setSearchValue(value);
  };

  function handleSearchClick() {
    if (!searchValue) return;
    onSearch(searchValue);
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
          <SearchIcon fontSize='small'/>
          <span>Search</span>
        </button>
      </div>
      <div className="searchBar-right">
        <button className="btn">
          <FavoriteIcon fontSize='small'/>
          <span>Favorites</span>
        </button>
      </div>
    </div>
  );
}
