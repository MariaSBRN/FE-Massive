import React from "react";
import styles from "./About.module.css";
import background from "../../assets/AboutPic.png";

function About() {
  return (
    <section className={styles.aboutUs}>
      <img src={background} alt="About Us" className={styles.aboutImage} />
      <div className={styles.aboutContent}>
        <div className={styles.aboutHeader}>
          <div className={styles.headerAccent}></div>
          <h2 className={styles.aboutTitle}>Tentang Kami</h2>
        </div>
        <div className={styles.aboutDescription}>
          <div className={styles.descriptionAccent}></div>
          <div>
            <h3 className={styles.groupName}>Kelompok Tani Dosroha</h3>
            <p className={styles.groupDescription}>
              Kelompok Tani Dosoroha adalah komunitas petani yang berfokus pada
              peningkatan produktivitas dan kesejahteraan melalui kerja sama,
              inovasi, dan pelatihan berkelanjutan. Kami mendukung anggota dalam
              mengelola lahan dan hasil pertanian secara produktif dan
              berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
