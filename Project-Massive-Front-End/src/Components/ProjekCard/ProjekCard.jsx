import React from "react";
import styles from "./ProjekCard.module.css";

const ProjekCard = ({
  rank,
  isNew,
  image,
  title,
  description,
  date,
  status,
  onPilihClick,
}) => {
  return (
    <article className={styles.projectCard}>
      <div className={styles.cardContent}>
        {/* Badge Rank Section */}
        <div className={styles.rankBadge}>
          <span className={styles.rankNumber}>{rank.padStart(2, "0")}</span>
          {isNew && <span className={styles.newBadge}>Baru</span>}
        </div>

        {/* Project Image */}
        <img
          src={image}
          alt={`Project ${title} thumbnail`}
          className={styles.projectImage}
        />

        {/* Project Info */}
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
          <div className={styles.dateContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0566b084b50a4de4b39a289f44a1314a/d79cc64e7046a698784b1f0626bca0af4d89923aefd058cb57a61ce107dd0299?apiKey=0566b084b50a4de4b39a289f44a1314a&"
              alt=""
              className={styles.calendarIcon}
            />
            <time className={styles.projectDate}>{date}</time>
          </div>
        </div>
      </div>

      {/* Status Section */}
      <div className={styles.statusSection}>
        <div className={styles.divider} />
        <button
          className={`${styles.actionButton} ${
            styles[status.toLowerCase().replace(/ /g, "-")]
          }`}
          onClick={status === "Ikuti" ? onPilihClick : undefined}
          disabled={status !== "Ikuti"}
        >
          {status}
        </button>
      </div>
    </article>
  );
};

export default ProjekCard;
