import React from "react";
import Navbar1 from "../../Components/Navbar1/Navbar1";
import Hero from "../../Components/Hero/Hero";
import Stats from "../../Components/Stats/Stats";
import About from "../../Components/About/About";
import Tool from "../../Components/Tool/Tool";
import Steps from "../../Components/Steps/Steps";
import Articles from "../../Components/ArticleSection/Articles";
import Footer from "../../Components/Footer/Footer";
import styles from "./Beranda.module.css";

const Beranda = () => {
  return (
    <div className={styles.homePage}>
      <Navbar1 />
      <Hero />
      <Stats />
      <About />
      <Tool />
      <Steps />
      <Articles />
      <Footer />
    </div>
  );
};

export default Beranda;
