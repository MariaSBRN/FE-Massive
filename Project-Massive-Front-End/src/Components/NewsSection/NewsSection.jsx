import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./NewsSection.module.css";
import newspic from "../../assets/newspic.png";

const newsData = [
  {
    title: "Pemerintah menambahkan bantuan subsidi sebanyak 200 kg",
    date: "27 September 2024",
    image: newspic,
  },
  {
    title: "Bibit Gratis bulan Maret sudah sampai ke balai desa",
    date: "27 September 2024",
    image: newspic,
  },
  {
    title: "Pemerintah menambahkan bantuan subsidi sebanyak 200 kg",
    date: "27 September 2024",
    image: newspic,
  },
  {
    title: "Bibit Gratis bulan Maret sudah sampai ke balai desa",
    date: "27 September 2024",
    image: newspic,
  },
  {
    title: "Pemerintah menambahkan bantuan subsidi sebanyak 200 kg",
    date: "27 September 2024",
    image: newspic,
  },
  {
    title: "Bibit Gratis bulan Maret sudah sampai ke balai desa",
    date: "27 September 2024",
    image: newspic,
  },
  {
    title: "Pemerintah menambahkan bantuan subsidi sebanyak 200 kg",
    date: "27 September 2024",
    image: newspic,
  },
  {
    title: "Bibit Gratis bulan Maret sudah sampai ke balai desa",
    date: "27 September 2024",
    image: newspic,
  },
  {
    title: "Pemerintah menambahkan bantuan subsidi sebanyak 200 kg",
    date: "27 September 2024",
    image: newspic,
  },
  {
    title: "Bibit Gratis bulan Maret sudah sampai ke balai desa",
    date: "27 September 2024",
    image: newspic,
  },
];

const NEWS_PER_PAGE = 6; // Misalnya 6 berita per halaman

const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / NEWS_PER_PAGE);
  const indexOfLastNews = currentPage * NEWS_PER_PAGE;
  const indexOfFirstNews = indexOfLastNews - NEWS_PER_PAGE;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className={styles.newsSection}>
      <div className={styles.newsGrid}>
        {currentNews.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>

      <div className={styles.pagination}>
        {/* Tombol ke halaman sebelumnya */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.pageButton1}
        >
          &laquo;
        </button>

        {/* Nomor halaman */}
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

        {/* Tombol ke halaman berikutnya */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.pageButton1}
        >
          &raquo;
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
