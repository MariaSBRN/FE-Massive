import React from "react";
import styles from "./ToolCard.module.css";

function ToolCard({ name, stock, image }) {
  return (
    <article className={styles.toolCard}>
      <div className={styles.cardContent}>
        <img src={image} alt={`${name} tool`} className={styles.toolImage} />
        <h2 className={styles.toolName}>{name}</h2>
        <p className={styles.stockInfo}>({stock} stock)</p>
      </div>
    </article>
  );
}

export default ToolCard;
