export default function SearchBarContainer() {
  return (
    <div className="searchBar--container">
      <div className="searchBar-left">
        <input
          type="text"
          placeholder="Search Pokemon"
          className="searchBar-input"
        />
        <button className="btn">Search</button>
      </div>
      <div className="searchBar-right">
        <button className="btn">Favroite</button>
        <button className="btn">Limit</button>
      </div>
    </div>
  );
}
