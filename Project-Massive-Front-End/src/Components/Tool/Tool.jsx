import React from "react";
import ToolCard from "../ToolCard/ToolCard";
import styles from "./Tool.module.css";
import cangkul from "../../assets/cangkul.png";
import cangkok from "../../assets/cangkok.png";
import tractor from "../../assets/tractor.png";
import sekop from "../../assets/sekop.png";
import sprayer from "../../assets/sprayer.png";
import layanan from "../../assets/layanan.png";

const toolsData = [
  {
    name: "Cangkul",
    stock: 25,
    image: cangkul,
  },
  {
    name: "Cangkok",
    stock: 25,
    image: cangkok,
  },
  {
    name: "Traktor Mini",
    stock: 25,
    image: tractor,
  },
  {
    name: "Sekop",
    stock: 25,
    image: sekop,
  },
  {
    name: "Sprayer",
    stock: 25,
    image: sprayer,
  },
];

function Tool() {
  return (
    <section className={styles.toolsSection}>
      <h1 className={styles.sectionTitle}>
        Temukan dan Pilih Alat Tani yang Ingin <br /> Dipinjam Sesuai
        Kebutuhanmu.
      </h1>
      <div className={styles.toolsContainer}>
        {toolsData.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.freeService}>
          <img
            src={layanan}
            alt="Free Service Icon"
            className={styles.serviceIcon}
          />
          <p className={styles.serviceText}>Layanan Gratis!</p>
        </div>
        <button className={styles.viewMoreButton}>Lihat lebih banyak...</button>
      </div>
    </section>
  );
}

export default Tool;
