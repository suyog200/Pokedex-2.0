/* eslint-disable react/prop-types */
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export default function SearchBarContainer({toggle, showFavorites}) {
  const [searchValue, setSearchValue] = useState("");

  function getSearchValue(value) {
    setSearchValue(value);
  }

  // function handleSearchClick() {
  //   if (!searchValue) return;
  //   onSearch(searchValue);
  // }

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
        <button className="btn">
          <SearchIcon fontSize='small'/>
          <span>Search</span>
        </button>
      </div>
      <div className="searchBar-right">
        {showFavorites ? (
          <button className="btn" onClick={toggle}>
            <DoneOutlineIcon fontSize='small'/>
            <span>Show All Pokemon</span>
          </button>
        ) : (
          <button className="btn" onClick={toggle}>
            <FavoriteIcon fontSize='small'/>
            <span>My Favorites</span>
          </button>
        )}
      </div>
    </div>
  );
}
