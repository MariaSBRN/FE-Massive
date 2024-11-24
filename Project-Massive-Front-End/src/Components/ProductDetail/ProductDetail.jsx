import React from "react";
import styles from "./ProductDetail.module.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ name, image, stock }) => {
  const handleBorrowClick = () => {
    // Menampilkan notifikasi Toast
    toast.success("Peminjaman berhasil!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <section className={styles.productDetail}>
      <div className={styles.productInfo}>
        <div className={styles.productDescription}>
          <img src={image} alt={name} className={styles.productImage} />
          <div className={styles.productText}>
            <h2 className={styles.productName}>{name}</h2>
            <p className={styles.productUse}>Dapat digunakan untuk menggali</p>
            <p className={styles.productStock}>Stok {stock}</p>
          </div>
          <div className={styles.controls}>
            <div class="container">
              <div class="row">
                <div class="col">
                  <div className={styles.quantitySelector}>
                    <button className={styles.quantityButton}>-</button>
                    <span className={styles.quantity}>1</span>
                    <button className={styles.quantityButton}>+</button>
                    <p className={styles.quantityLabel}>
                      jumlah yang ingin dipinjam
                    </p>
                  </div>

                  <div className={styles.dateInputs}>
                    <div>
                      <div className={styles.dateInputContainer}>
                        <input
                          type="date"
                          id="borrowDate"
                          className={styles.dateInput}
                        />
                        <label
                          htmlFor="borrowDate"
                          className={styles.dateLabel}
                        >
                          tanggal peminjaman
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className={styles.dateInputContainer}>
                        <input
                          type="date"
                          id="returnDate"
                          className={styles.dateInput}
                        />
                        <label
                          htmlFor="returnDate"
                          className={styles.dateLabel}
                        >
                          tanggal pengembalian
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className={styles.orderSummary}>
        <h3 className={styles.summaryTitle}>Rangkuman Pemesanan</h3>
        <ul className={styles.summaryList}>
          <li>nama barang {name}</li>
          <li>tanggal peminjaman</li>
          <li>tanggal pengembalian</li>
        </ul>
        <p className={styles.totalItems}>Total Barang</p>
        <button className={styles.borrowButton} onClick={handleBorrowClick}>
          Pinjam
        </button>
      </aside>
    </section>
  );
};

export default ProductDetail;
