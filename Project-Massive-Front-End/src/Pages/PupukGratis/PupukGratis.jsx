import React, { useState } from "react";
import Navbar from "../../Components/Navbar1/Navbar1";
import SearchBar from "../../Components/SearchBar1/SearchBar1";
import FertilizerCard from "../../Components/PupukCard/PupukCard1";
import Footer from "../../Components/Footer/Footer";
import styles from "./PupukGratis.module.css";
import urea from "../../assets/urea.png";
import subsidipic from "../../assets/subsidipic.png";
import ceklis from "../../assets/ceklis.png";
import silang from "../../assets/silang.png";

const fertilizerData = [
  {
    rank: "1",
    isNew: true,
    image: urea,
    name: "Pupuk Urea",
    jenis: "Pupuk Kimia",
    date: "20 September 2024",
    total: 2,
    status: "available",
  },
  {
    rank: "2",
    isNew: true,
    image: urea,
    name: "Pupuk ZA",
    jenis: "Pupuk Kimia",
    date: "10 September 2024",
    total: 3,
    status: "available",
  },
  {
    rank: "3",
    isNew: false,
    image: urea,
    name: "Pupuk Dolomit",
    jenis: "Pupuk Anorganik",
    date: "16 Agustus 2024",
    total: 2,
    status: "taken",
  },
  {
    rank: "4",
    isNew: false,
    image: urea,
    name: "Pupuk NPK",
    jenis: "Pupuk Anorganik",
    date: "02 Agustus 2024",
    total: 1,
    status: "taken",
  },
  {
    rank: "5",
    isNew: false,
    image: urea,
    name: "Pupuk Super N",
    jenis: "Pupuk Anorganik",
    date: "28 Juli 2024",
    total: 3,
    status: "taken",
  },
  {
    rank: "6",
    isNew: false,
    image: urea,
    name: "Pupuk Dolomit",
    jenis: "Pupuk Anorganik",
    date: "16 Agustus 2024",
    total: 2,
    status: "taken",
  },
  {
    rank: "7",
    isNew: false,
    image: urea,
    name: "Pupuk NPK",
    jenis: "Pupuk Anorganik",
    date: "02 Agustus 2024",
    total: 1,
    status: "taken",
  },
  {
    rank: "8",
    isNew: false,
    image: urea,
    name: "Pupuk Super N",
    jenis: "Pupuk Anorganik",
    date: "28 Juli 2024",
    total: 3,
    status: "taken",
  },
];

const PupukGratis = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFertilizer, setSelectedFertilizer] = useState(null); // Untuk data pupuk yang dipilih
  const [showConfirmation, setShowConfirmation] = useState(false); // Untuk pop-up konfirmasi
  const [showNotification, setShowNotification] = useState(false); // Untuk notifikasi

  const totalPages = Math.ceil(fertilizerData.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentData = fertilizerData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAmbilClick = (fertilizer) => {
    setSelectedFertilizer(fertilizer); // Simpan data pupuk yang dipilih
    setShowConfirmation(true); // Tampilkan pop-up konfirmasi
  };

  const handleConfirmAmbil = () => {
    setShowConfirmation(false); // Tutup pop-up konfirmasi
    setShowNotification(true); // Tampilkan notifikasi
    setTimeout(() => setShowNotification(false), 3000); // Notifikasi hilang setelah 3 detik
  };

  const handleCancel = () => {
    setShowConfirmation(false); // Tutup pop-up konfirmasi
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <header className={styles.hero}>
        <img src={subsidipic} alt="" className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className={styles.heroTitle}>
            Pemerintah Bantu Berikan Pupuk Gratis Terbaik untuk Desa
          </h1>
          <p className={styles.heroSubtitle}>
            Daftarkan Kelompok Tani Desa Anda Sekarang, Mudah Akses Info, Maju
            Bersama Petani
          </p>
        </div>
      </header>

      <main className={styles.mainContent}>
        <SearchBar />
        <section className={styles.fertilizerList}>
          {currentData.map((fertilizer, index) => (
            <FertilizerCard
              key={index}
              {...fertilizer}
              onAmbilClick={() => handleAmbilClick(fertilizer)} // Tambahkan event handler
            />
          ))}
        </section>
        <div className={styles.pagination}>
          {/* Tombol ke halaman sebelumnya */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageButton1}
          >
            &laquo;
          </button>

          {/* Nomor halaman */}
          {[...Array(totalPages)].map((_, index) => (
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
            disabled={currentPage === totalPages}
            className={styles.pageButton1}
          >
            &raquo;
          </button>
        </div>
      </main>

      <Footer />

      {/* Pop-up Konfirmasi */}
      {showConfirmation && selectedFertilizer && (
        <div className={styles.popupContainer}>
          <div className={styles.popup}>
            <h3>Pupuk Subsidi</h3>
            <p>Apakah anda yakin ingin mengambil?</p>
            <p>
              <b>{selectedFertilizer.name}</b>
            </p>
            <p>
              Biaya Potong Subsidi:
              {selectedFertilizer.jenis}
            </p>

            <p>Jumlah Max/Anggota: {selectedFertilizer.total} kg</p>
            <p>Tanggal Pencairan: {selectedFertilizer.date}</p>
            <div className={styles.popupButtons}>
              <button
                onClick={handleConfirmAmbil}
                className={styles.confirmButton}
              >
                Ambil
              </button>
              <button onClick={handleCancel} className={styles.cancelButton}>
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pop-up Notifikasi */}
      {showNotification && (
        <section
          className={styles.successContainer}
          role="dialog"
          aria-labelledby="modalTitle"
        >
          <div className={styles.contentWrapper}>
            <div className={styles.messageContainer}>
              <img
                loading="lazy"
                src={ceklis}
                className={styles.profileImage}
                alt="Success confirmation icon"
              />
              <h2 id="modalTitle" className={styles.successMessage}>
                Pupuk Gratis berhasil diambil!
              </h2>
            </div>
            <button
              className={styles.confirmButton1}
              onClick={() => setShowNotification(false)}
              aria-label="Close success modal"
            >
              OK
            </button>
          </div>
          <button
            onClick={() => setShowNotification(false)}
            className={styles.closeButton}
            aria-label="Close modal"
          >
            <img
              loading="lazy"
              src={silang}
              className={styles.closeIcon}
              alt="Close icon"
            />
          </button>
        </section>
      )}
    </div>
  );
};

export default PupukGratis;
