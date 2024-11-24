import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductSection.module.css";
import cangkul from "../../assets/cangkul.png";
import cangkok from "../../assets/cangkok.png";
import tractor from "../../assets/tractor.png";

const products = [
  {
    name: "Cangkul",
    image: cangkul,
    stock: 25,
  },
  {
    name: "Cangkok",
    image: cangkok,
    stock: 25,
  },
  {
    name: "Cangkok",
    image: cangkok,
    stock: 25,
  },
  {
    name: "Traktor Mini",
    image: cangkul,
    stock: 25,
  },
  {
    name: "Sekop",
    image: cangkul,
    stock: 25,
  },
  {
    name: "Sekop",
    image: cangkul,
    stock: 25,
  },
  {
    name: "Sekop",
    image: cangkok,
    stock: 25,
  },
  {
    name: "Cangkul",
    image: cangkok,
    stock: 25,
  },
  {
    name: "Cangkok",
    image: cangkok,
    stock: 25,
  },
  {
    name: "Traktor Mini",
    image: cangkok,
    stock: 25,
  },
  {
    name: "Sekop",
    image: cangkok,
    stock: 25,
  },
  {
    name: "Sekop",
    image: cangkok,
    stock: 25,
  },
  {
    name: "Sekop",
    image: cangkok,
    stock: 25,
  },
];

const PRODUCTS_PER_PAGE = 12; // 6 kolom x 2 baris

function ProductSection({ onSelectProduct }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className={styles.productSection}>
      <div className={styles.productGrid}>
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            onBorrow={() => onSelectProduct(product)}
          />
        ))}
      </div>

      <div className={styles.pagination}>
        {/* Tombol ke halaman sebelumnya */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1} // Nonaktifkan jika di halaman pertama
          className={styles.pageButton1}
        >
          &laquo;
        </button>

        {/* Nomor halaman */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${styles.pageButton} ${
              currentPage === index + 1 ? styles.active : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Tombol ke halaman berikutnya */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages} // Nonaktifkan jika di halaman terakhir
          className={styles.pageButton1}
        >
          &raquo;
        </button>
      </div>
    </section>
  );
}

export default ProductSection;
