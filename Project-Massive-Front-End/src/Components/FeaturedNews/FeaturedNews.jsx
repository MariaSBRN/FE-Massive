import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./FeaturedNews.module.css";
import picture from "../../assets/featurednews.png";

const FeaturedNews = () => {
  return (
    <>
      <section className={styles.newsSection}>
        <h2 className={styles.sectionTitle}>Edukasi Terbaru</h2>
      </section>
      <article className={styles.featuredNews}>
        <img
          src={picture}
          alt="Optimalisasi Lahan Kering untuk Budidaya Padi"
          className={styles.featuredImage}
        />
        <div className={styles.featuredContent}>
          <h3 className={styles.featuredTitle}>
            Optimalisasi Lahan Kering untuk Budidaya Padi Berkelanjutan
          </h3>
          <time className={styles.featuredDate}>27 September 2024</time>
          <p className={styles.featuredExcerpt}>
            Budidaya padi pada lahan kering menjadi salah satu solusi potensial
            untuk mengatasi keterbatasan lahan basah di Indonesia. Optimalisasi
            lahan kering memerlukan teknik khusus, seperti pemilihan varietas
            padi yang tahan kekeringan, sistem irigasi hemat air seperti irigasi
            tetes, dan penggunaan bahan organik untuk menjaga kelembaban tanah.
          </p>
          <Link to="/informationDetail" className={styles.readMoreLink}>
            Lihat Selengkapnya
          </Link>
        </div>
      </article>
    </>
  );
};

export default FeaturedNews;
