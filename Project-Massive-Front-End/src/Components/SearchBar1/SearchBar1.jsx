import React from "react";
import styles from "./SearchBar1.module.css";
import search from "../../assets/Search.png";

export const SearchBar1 = () => {
  return (
    <form className={styles.searchContainer} role="search">
      <label htmlFor="fertilizerSearch" className="visually-hidden">
        Cari Pupuk Gratis Anda Disini
      </label>
      <input
        type="search"
        id="fertilizerSearch"
        className={styles.searchInput}
        placeholder="Cari Pupuk Gratis Anda Disini"
      />
      <button type="submit" className={styles.searchButton}>
        <img src={search} alt="Search" className={styles.searchIcon} />
      </button>
    </form>
  );
};

export default SearchBar1;
