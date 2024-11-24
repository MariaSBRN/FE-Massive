import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./Riwayat.module.css";
import RiwayatSection from "../../Components/RiwayatSection/RiwayatSection";

const Riwayat = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <main>
        <RiwayatSection />
      </main>
      <Footer />
    </div>
  );
};

export default Riwayat;
