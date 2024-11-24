import React from "react";
import styles from "./ArticleCard.module.css";

const ArtikelCard = ({ imageSrc, type, title, date }) => {
  return (
    <div className={styles.artikelCard}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.type}>{type}</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default ArtikelCard;
