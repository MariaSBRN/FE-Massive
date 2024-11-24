import React, { useState } from "react";
import Navbar from "../../Components/Navbar1/Navbar1";
import Footer from "../../Components/Footer/Footer";
import styles from "./Projek.module.css";
import ProjekCard from "../../Components/ProjekCard/ProjekCard";
import SearchBar from "../../Components/SearchBarProjek/SearchBarProjek";
import picture from "../../assets/logo2.png";
import projecpic from "../../assets/projekpic.png";
import ceklis from "../../assets/ceklis.png";
import silang from "../../assets/silang.png";

const projects = [
  {
    rank: "01",
    isNew: true,
    image: picture,
    title: "Budidaya Padi Organik",
    description:
      "Mendukung petani untuk memproduksi pupuk organik dari bahan lokal, mengurangi ketergantungan pada pupuk kimia dan meningkatkan kesehatan tanah.",
    date: "10 Oktober 2024",
    status: "Ikuti",
  },
  {
    rank: "02",
    isNew: true,
    image: picture,
    title: "Pembudidayaan Tanaman Herbal",
    description:
      "Memberikan pelatihan untuk menanam dan mengolah tanaman herbal yang bernilai tinggi, membuka peluang pemasaran baru bagi petani lokal.",
    date: "01 Oktober 2024",
    status: "Ikuti",
  },
  {
    rank: "03",
    isNew: false,
    image: picture,
    title: "Pengembangan Bibit Unggul",
    description:
      "Membantu petani mendapatkan akses ke bibit unggul yang lebih tahan terhadap penyakit dan memiliki hasil panen lebih tinggi.",
    date: "20 September 2024",
    status: "Sedang terlaksana",
  },
  {
    rank: "04",
    isNew: false,
    image: picture,
    title: "Pendampingan Hama dan Penyakit Tanaman",
    description:
      "Memberikan edukasi kepada petani tentang cara mengidentifikasi dan mengatasi hama serta penyakit tanaman dengan metode alami dan organik",
    date: "10 September 2024",
    status: "Selesai",
  },
  {
    rank: "05",
    isNew: false,
    image: picture,
    title: "Pengelolaan Irigasi Cerdas",
    description: picture,
    date: "10 Agustus 2024",
    status: "Selesai",
  },
  {
    rank: "03",
    isNew: false,
    image: picture,
    title: "Pengembangan Bibit Unggul",
    description:
      "Membantu petani mendapatkan akses ke bibit unggul yang lebih tahan terhadap penyakit dan memiliki hasil panen lebih tinggi.",
    date: "20 September 2024",
    status: "Sedang terlaksana",
  },
  {
    rank: "04",
    isNew: false,
    image: picture,
    title: "Pendampingan Hama dan Penyakit Tanaman",
    description:
      "Memberikan edukasi kepada petani tentang cara mengidentifikasi dan mengatasi hama serta penyakit tanaman dengan metode alami dan organik",
    date: "10 September 2024",
    status: "Selesai",
  },
  {
    rank: "05",
    isNew: false,
    image: picture,
    title: "Pengelolaan Irigasi Cerdas",
    description: picture,
    date: "10 Agustus 2024",
    status: "Selesai",
  },
  {
    rank: "03",
    isNew: false,
    image: picture,
    title: "Pengembangan Bibit Unggul",
    description:
      "Membantu petani mendapatkan akses ke bibit unggul yang lebih tahan terhadap penyakit dan memiliki hasil panen lebih tinggi.",
    date: "20 September 2024",
    status: "Sedang terlaksana",
  },
];

const Projek = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null); // Data proyek yang dipilih
  const [showConfirmation, setShowConfirmation] = useState(false); // Pop-up konfirmasi
  const [showNotification, setShowNotification] = useState(false); // Notifikasi

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentData = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePilihClick = (project) => {
    setSelectedProject(project); // Simpan data proyek yang dipilih
    setShowConfirmation(true); // Tampilkan pop-up konfirmasi
  };

  const handleConfirmPilih = () => {
    setShowConfirmation(false); // Tutup pop-up konfirmasi
    setShowNotification(true); // Tampilkan notifikasi
    setTimeout(() => setShowNotification(false), 3000); // Hilang setelah 3 detik
  };

  const handleCancel = () => {
    setShowConfirmation(false); // Tutup pop-up konfirmasi
  };

  return (
    <div className={styles.projectPage}>
      <Navbar />
      <header className={styles.hero}>
        <img src={projecpic} alt="" className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className={styles.heroTitle}>
            Dukung Masa Depan Pertanian di Desa Anda!
          </h1>
          <p className={styles.heroSubtitle}>
            Daftarkan kelompok tani Anda sekarang dan ikut serta dalam
            program-program pertanian unggulan untuk peningkatan produktivitas
            dan keberlanjutan desa.
          </p>
        </div>
      </header>
      <main className={styles.projectListContainer}>
        <SearchBar />
        <section className={styles.projectsGrid}>
          {currentData.map((project, index) => (
            <ProjekCard
              key={index}
              {...project}
              onPilihClick={() => handlePilihClick(project)} // Tambahkan event handler
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
      {showConfirmation && selectedProject && (
        <div className={styles.popupContainer}>
          <div className={styles.popup}>
            <h3>Detail Proyek</h3>
            <p>Apakah anda yakin ingin mengikuti?</p>
            <p>
              <b>{selectedProject.title}</b>
            </p>
            <p>{selectedProject.description}</p>
            <div className={styles.popupButtons}>
              <button
                onClick={handleConfirmPilih}
                className={styles.confirmButton}
              >
                Ikuti
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
                Proyek Tani berhasil diikuti
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

export default Projek;
