import React from "react";
import styles from "./Hero.module.css";
import HeroBackground from "../../assets/HeroBackground.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src={HeroBackground}
        alt="Hero background"
        className={styles.heroBackground}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Meningkatkan Kesejahteraan Petani, Membangun Desa Pandumaan
        </h1>
      </div>
    </section>
  );
}

export default Hero;
