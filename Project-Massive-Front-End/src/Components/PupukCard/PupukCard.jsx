import React from "react";
import styles from "./PupukCard.module.css";

export const PupukCard = ({
  rank,
  isNew,
  image,
  name,
  price,
  date,
  maxMembers,
  status,
  onAmbilClick, // Pastikan menerima prop ini
}) => {
  return (
    <article className={styles.fertilizerCard}>
      <div className={styles.cardContent}>
        <div className={styles.rankBadge}>
          <span className={styles.rankNumber}>{rank.padStart(2, "0")}</span>
          {isNew && <span className={styles.newBadge}>Baru</span>}
        </div>
        <img
          src={image}
          alt={`${name} fertilizer product`}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{name}</h3>
          <p className={styles.productDetails}>
            Biaya Potong Subsidi : Rp {price.toLocaleString()},00
            <br />
            Tanggal Pengeceran : {date}
            <br />
            Jumlah Max/Anggota : {maxMembers} Anggota
          </p>
        </div>
        <div className={styles.actionSection}>
          <div className={styles.divider} />
          <button
            className={`${styles.actionButton} ${
              status === "taken" ? styles.takenButton : styles.availableButton
            }`}
            onClick={onAmbilClick}
            disabled={status === "taken"}
          >
            {status === "taken" ? "Sudah Diambil" : "Ambil"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default PupukCard;
