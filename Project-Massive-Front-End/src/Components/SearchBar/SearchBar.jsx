import React from "react";
import styles from "./SearchBar.module.css";
import search from "../../assets/Search.png";

export const SearchBar = () => {
  return (
    <form className={styles.searchContainer} role="search">
      <label htmlFor="fertilizerSearch" className="visually-hidden">
        Cari Pupuk Subsidi Anda Disini
      </label>
      <input
        type="search"
        id="fertilizerSearch"
        className={styles.searchInput}
        placeholder="Cari Pupuk Subsidi Anda Disini"
      />
      <button type="submit" className={styles.searchButton}>
        <img src={search} alt="Search" className={styles.searchIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
