import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar2/Navbar2";
import Footer from "../../Components/Footer/Footer";
import NewsDetail from "../../Components/NewsDetail/NewsDetail";
import styles from "./InformationDetail.module.css";
import newsdetail from "../../assets/newsdetail.png";

export const InformationDetail = () => {
  return (
    <main className={styles.informationPage}>
      <Navbar />

      <section className={styles.content}>
        <p className={styles.breadcrumb}>
          <Link to="/Information" className={styles.breadcrumb}>
            Informasi
          </Link>{" "}
          / Edukasi
        </p>

        <img
          src={newsdetail}
          alt="Agricultural field showing sustainable rice cultivation"
          className={styles.heroImage}
        />

        <article className={styles.articleContent}>
          <h1 className={styles.title}>
            Optimalisasi Lahan Kering untuk Budidaya Padi Berkelanjutan
          </h1>

          <time className={styles.date}>27 September 2024</time>
          <div className={styles.articleDivider} />

          <p className={styles.articleText}>
            Budidaya padi pada lahan kering menjadi salah satu solusi potensial
            untuk mengatasi keterbatasan lahan basah di Indonesia. Optimalisasi
            lahan kering memerlukan teknik khusus, seperti pemilihan varietas
            padi yang tahan kekeringan, sistem irigasi hemat air seperti irigasi
            tetes, dan penggunaan bahan organik untuk menjaga kelembaban tanah.
            Budidaya padi pada lahan kering menjadi salah satu solusi potensial
            untuk mengatasi keterbatasan lahan basah di Indonesia. Optimalisasi
            lahan kering memerlukan teknik khusus, seperti pemilihan varietas
            padi yang tahan kekeringan, sistem irigasi hemat air seperti irigasi
            tetes, dan penggunaan bahan organik untuk menjaga kelembaban tanah.
            <br />
            <br />
            Selain itu, pengembangan teknologi pertanian berkelanjutan menjadi
            faktor kunci dalam optimalisasi lahan kering. Teknologi seperti
            sensor tanah untuk memantau kelembaban, aplikasi drone untuk
            distribusi pupuk, dan alat ukur kebutuhan air tanaman dapat membantu
            petani dalam mengelola sumber daya secara lebih efektif. Pemanfaatan
            teknologi ini tidak hanya meningkatkan hasil panen tetapi juga
            menjaga keberlanjutan lingkungan dengan mengurangi penggunaan air
            dan pupuk kimia secara berlebihan.
            <br />
            <br />
            Pengelolaan lahan kering yang baik juga melibatkan aspek konservasi
            tanah dan air. Penggunaan tanaman penutup tanah seperti
            kacang-kacangan dapat membantu mengurangi erosi dan meningkatkan
            kesuburan tanah. Selain itu, rotasi tanaman juga penting untuk
            menjaga keseimbangan ekosistem lahan dan mengurangi risiko serangan
            hama serta penyakit tanaman.
            <br />
            <br />
            Dengan pendekatan yang tepat, budidaya padi pada lahan kering tidak
            hanya menjadi solusi bagi keterbatasan lahan basah tetapi juga
            membuka peluang baru untuk meningkatkan ketahanan pangan di
            Indonesia. Dukungan yang berkelanjutan dari berbagai pihak akan
            sangat berperan dalam mewujudkan pertanian yang tangguh dan adaptif
            terhadap perubahan iklim. Melalui inovasi, kolaborasi, dan penerapan
            teknologi modern, potensi lahan kering dapat diubah menjadi aset
            yang produktif bagi pertanian Indonesia.
          </p>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default InformationDetail;
