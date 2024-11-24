import React from "react";
import Header from "../../Components/Navbar2/Navbar2";
import NewsSection from "../../Components/NewsSection/NewsSection";
import FeaturedNews from "../../Components/FeaturedNews/FeaturedNews";
import Footer from "../../Components/Footer/Footer";
import styles from "./Information.module.css";

const Information = () => {
  return (
    <div className={styles.informationPage}>
      <Header />
      <main className={styles.mainContent}>
        <FeaturedNews />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Information;
