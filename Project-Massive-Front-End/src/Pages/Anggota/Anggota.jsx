import React, { useState } from "react";
import HarvestCard from "../../Components/HarvestCard/HarvestCard";
import Navbar from "../../Components/Navbar1/Navbar1";
import Footer from "../../Components/Footer/Footer";
import styles from "./Anggota.module.css";
import heropic from "../../assets/anggotahero.png";

function Anggota() {
  return (
    <main className={styles.harvestContainer}>
      <Navbar />

      <section className={styles.heroSection}>
        <img src={heropic} alt="" className={styles.heroBackground} />
        <br></br>
        <br></br>
        <br></br>
        <h1 className={styles.heroTitle}>
          Kelompok Tani Dosroha Raih Panen Melimpah Berkat Dukungan Pupuk dan
          Kerja Keras Bersama!
        </h1>
      </section>

      <section className={styles.filterSection}></section>

      <Footer />
    </main>
  );
}

export default Anggota;
