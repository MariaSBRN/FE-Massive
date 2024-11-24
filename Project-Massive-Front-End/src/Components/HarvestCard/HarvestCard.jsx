import React from "react";
import styles from "./HarvestCard.module.css";
import calendar from "../../assets/calendar2.svg";

function HarvestCard({ title, quality, amount, date, image }) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardDetails}>
        <p>Kualitas : {quality}</p>
        <p>Jumlah Hasil Panen : {amount}</p>
      </div>
      <div className={styles.cardDate}>
        <img src={calendar} alt="" className={styles.dateIcon} />
        <time dateTime={date}>{date}</time>
      </div>
    </article>
  );
}

export default HarvestCard;
