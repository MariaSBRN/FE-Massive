import React, { useState } from "react";
import HarvestCard from "../../Components/HarvestCard/HarvestCard";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./Harvest.module.css";
import heropic from "../../assets/HasilPanenHero.png";
import bawang from "../../assets/Bawang.png";
import calendar from "../../assets/calendar.svg";

const harvestData = [
  {
    id: 1,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 2,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 3,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 4,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 5,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 6,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 7,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 8,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 9,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 1,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 2,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 3,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 4,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 5,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 6,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
  {
    id: 7,
    title: "Bawang Merah",
    quality: "Baik",
    amount: "200 kg",
    date: "04 Januari 2023",
    image: bawang,
  },
];

const ITEMS_PER_PAGE = 9; // 6 item per halaman

function Harvest() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(harvestData.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = harvestData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className={styles.harvestContainer}>
      <Navbar />

      <section className={styles.heroSection}>
        <img src={heropic} alt="" className={styles.heroBackground} />
        <h1 className={styles.heroTitle}>
          Kelompok Tani Dosroha Raih Panen Melimpah Berkat Dukungan Pupuk dan
          Kerja Keras Bersama!
        </h1>
      </section>

      <section className={styles.filterSection}>
        <div className={styles.dateFilter}>
          <img src={calendar} alt="" className={styles.calendarIcon} />
          <span>Jan 04, 2023 - Des 29, 2023</span>
        </div>

        <form className={styles.searchForm}>
          <label htmlFor="searchHarvest" className="visually-hidden">
            Cari hasil panen
          </label>
          <div className={styles.searchInput}>
            <img src="/search-icon.svg" alt="" className={styles.searchIcon} />
            <input
              type="search"
              id="searchHarvest"
              placeholder="Cari hasil panen anda"
              className={styles.searchField}
            />
          </div>
        </form>
      </section>

      <section className={styles.harvestGrid}>
        {currentItems.map((harvest) => (
          <HarvestCard key={harvest.id} {...harvest} />
        ))}
      </section>

      <div className={styles.pagination}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${styles.pageButton} ${
              currentPage === index + 1 ? styles.active : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Footer />
    </main>
  );
}

export default Harvest;
