// import PropTypes from "prop-types";

// function Filter({ filter, input }) {
//   return (
//     <div className={css.filterContainer}>
//       <h3>Find contacts by name:</h3>
//       <input
//         type="text"
//         value={filter}
//         onChange={(e) => input(e.target.value)}
//         className={css.filterBox}
//         placeholder="Search contacts..."
//       />
//     </div>
//   );
// }
// Filter.propTypes = {
//   input: PropTypes.func.isRequired,
// };

// export default Filter;

import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
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
