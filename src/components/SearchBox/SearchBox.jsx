import css from "./SearchBox.module.css";

function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={css.searchBoxContainer}>
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className={css.searchBox}
        placeholder="Search contacts..."
      />
    </div>
  );
}
export default SearchBox;
