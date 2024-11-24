import React from "react";
import styles from "./NewsDetail.module.css";

const articleSections = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c0ef99ccdfa8a2eaeca290c48168ae2f5891d1eaafdd46b13fbacb93bfc08ce0?placeholderIfAbsent=true&apiKey=0566b084b50a4de4b39a289f44a1314a",
    text: "Budidaya padi pada lahan kering menjadi salah satu solusi potensial untuk mengatasi keterbatasan lahan basah di Indonesia. Optimalisasi lahan kering memerlukan teknik khusus, seperti pemilihan varietas padi yang tahan kekeringan, sistem irigasi hemat air seperti irigasi tetes, dan penggunaan bahan organik untuk menjaga kelembaban tanah.",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c0ef99ccdfa8a2eaeca290c48168ae2f5891d1eaafdd46b13fbacb93bfc08ce0?placeholderIfAbsent=true&apiKey=0566b084b50a4de4b39a289f44a1314a",
    text: "Budidaya padi pada lahan kering menjadi salah satu solusi potensial untuk mengatasi keterbatasan lahan basah di Indonesia. Optimalisasi lahan kering memerlukan teknik khusus, seperti pemilihan varietas padi yang tahan kekeringan, sistem irigasi hemat air seperti irigasi tetes, dan penggunaan bahan organik untuk menjaga kelembaban tanah.",
  },
];

export function ArticleContent() {
  return (
    <div className={styles.articleContent}>
      {articleSections.map((section, index) => (
        <section
          key={index}
          className={styles.articleSection}
          aria-label={`Section ${index + 1}`}
        >
          <img
            src={section.image}
            alt="Teknik budidaya padi pada lahan kering"
            className={styles.articleImage}
          />
          <p className={styles.articleText}>{section.text}</p>
        </section>
      ))}
    </div>
  );
}

export default ArticleContent;
