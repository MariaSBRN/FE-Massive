import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NewsCard.module.css";

const NewsCard = ({ title, date, content, image }) => {
  return (
    <article className={styles.newsCard}>
      <img src={image} alt={title} className={styles.newsImage} />
      <div className={styles.newsContent}>
        <h3 className={styles.newsTitle}>{title}</h3>
        <p className={styles.newsDate}>{date}</p>
        {content && <p className={styles.newsDescription}>{content}</p>}
        <Link to="/informationDetail" className={styles.readMore}>
          Lihat Selengkapnya
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
