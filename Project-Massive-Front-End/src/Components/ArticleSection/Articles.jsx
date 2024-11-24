import React from "react";
import ArtikelCard from "../ArticleCard/ArticleCard";
import styles from "./Articles.module.css";
import examplearticle from "../../assets/examplearticle.png";

const Articles = () => {
  const articles = [
    {
      imageSrc: examplearticle,
      type: "Artikel",
      title:
        "Inovasi Terbaru dalam Teknologi Pertanian yang Meningkatkan Hasil Panen",
      date: "23 Sep 2024",
    },
    {
      imageSrc: examplearticle,
      type: "Artikel",
      title: "Tips dan Trik Budidaya Tanaman untuk Petani Pemula",
      date: "23 Sep 2024",
    },
    {
      imageSrc: examplearticle,
      type: "Artikel",
      title:
        "Kiat Sukses Mengelola Sumber Daya Alam Secara Berkelanjutan di Lahan Pertanian",
      date: "23 Sep 2024",
    },
  ];

  return (
    <section className={styles.articlesSection}>
      <h2 className={styles.heading}>Berita yang bisa anda baca!</h2>
      <div className={styles.articlesContainer}>
        {articles.map((article, index) => (
          <ArtikelCard
            key={index}
            imageSrc={article.imageSrc}
            type={article.type}
            title={article.title}
            date={article.date}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
