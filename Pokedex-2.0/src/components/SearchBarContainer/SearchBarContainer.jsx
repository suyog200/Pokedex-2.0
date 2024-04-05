import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBarContainer() {
  return (
    <div className="searchBar--container">
      <div className="searchBar-left">
        <input
          type="text"
          placeholder="Search Pokemon"
          className="searchBar-input"
        />
        <button className="btn">
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
