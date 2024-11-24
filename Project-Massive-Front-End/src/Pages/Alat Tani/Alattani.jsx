import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProductSection from "../../Components/ProductSection/ProductSection";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import Footer from "../../Components/Footer/Footer";
import styles from "./Alattani.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AlatTani() {
  const [selectedProduct, setSelectedProduct] = useState(null); // State untuk produk yang dipilih

  return (
    <div className={styles.alatTaniPage}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>
          Lebih dari 10 Alat Tani yang dapat kamu pinjam
        </h1>
        <p className={styles.mainDescription}>
          Temukan 10+ produk yang kamu butuhkan untuk petanian kamu dan dapat
          kamu pinjam secara gratis
        </p>
        <ProductSection onSelectProduct={setSelectedProduct} />

        {/* Tampilkan ProductDetail jika ada produk yang dipilih */}
        {selectedProduct && (
          <ProductDetail
            name={selectedProduct.name}
            image={selectedProduct.image}
            stock={selectedProduct.stock}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default AlatTani;
