import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ name, image, stock, onBorrow }) {
  return (
    <div>
      <div className={styles.productCard}>
        <img src={image} alt={name} className={styles.productImage} />
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productStock}>({stock} stock)</p>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.borrowButton}
          onClick={onBorrow} // Panggil fungsi onBorrow saat tombol ditekan
        >
          Pinjam Sekarang
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
