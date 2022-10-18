import React from 'react';
import styles from './Search.module.scss';
const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="🔎  Find keyboard"
        type="text"
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue('')}
          className={styles.input__cross}
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px">
          <path
            className={styles.root}
            fill="none"
            stroke="#000000"
            strokeMiterlimit="10"
            strokeWidth="1"
            d="M7.741 7.741L42.359 42.359M42.258 7.742L7.618 42.382"
          />
        </svg>
      )}
    </div>
  );
};
export default Search;
