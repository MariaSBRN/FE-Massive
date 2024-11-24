import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/footerlogo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <img src={logo} alt="Alat Tani Logo" className={styles.footerLogo} />
          <p className={styles.footerDescription}>
            Temukan Informasi, Dukungan, dan Solusi Pertanian Terbaik di Sini.
            Terhubunglah dengan Kami untuk Meningkatkan Produktivitas dan
            Kesejahteraan Petani.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Links</h2>
          <nav className={styles.footerNav}>
            <a href="#" className={styles.footerLink}>
              Link 1
            </a>
            <a href="#" className={styles.footerLink}>
              Link 2
            </a>
            <a href="#" className={styles.footerLink}>
              Link 3
            </a>
          </nav>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Links</h2>
          <nav className={styles.footerNav}>
            <a href="#" className={styles.footerLink}>
              Link 1
            </a>
            <a href="#" className={styles.footerLink}>
              Link 2
            </a>
            <a href="#" className={styles.footerLink}>
              Link 3
            </a>
          </nav>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Links</h2>
          <nav className={styles.footerNav}>
            <a href="#" className={styles.footerLink}>
              Link 1
            </a>
            <a href="#" className={styles.footerLink}>
              Link 2
            </a>
            <a href="#" className={styles.footerLink}>
              Link 3
            </a>
          </nav>
        </div>
        <div>
          <h2 className={styles.footerTitle}>Location</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cea427daaa85945879aff6bdded1535e08acafe39d925f918f6296f41bda661?placeholderIfAbsent=true&apiKey=dbfd7f8f224c48a0aea9e1c02b0ed526"
            alt=""
            className={styles.footerImage}
          />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          Seluruh Hak Cipta Dilindungi © 2024 Kelompok Panca Tani Cakra
        </p>
      </div>
    </footer>
  );
}

export default Footer;
