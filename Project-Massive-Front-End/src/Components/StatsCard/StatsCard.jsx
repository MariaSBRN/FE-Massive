import React from "react";
import styles from "./StatsCard.module.css";

const StatsCard = ({
  backgroundSrc,
  iconSrc,
  title,
  description,
  arrowSrc,
}) => {
  return (
    <article className={styles.productCard}>
      <header className={styles.productHeader}>
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className={styles.productIcon}
          loading="lazy"
        />
        <h2 className={styles.productTitle}>{title}</h2>
      </header>
      <div className={styles.productDescription}>
        <p className={styles.descriptionText}>{description}</p>
        <img
          src={arrowSrc}
          alt="Learn more"
          className={styles.arrowIcon}
          loading="lazy"
        />
      </div>
    </article>
  );
};

export default StatsCard;
