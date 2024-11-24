import React, { useState } from "react";
import styles from "./RiwayatSection.module.css";

const RiwayatSection = () => {
  const data = [
    {
      alat: "Cangkul",
      tanggalPinjam: "25/10/2024",
      tanggalKembali: "25/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Menunggu",
    },
    {
      alat: "Cangkul",
      tanggalPinjam: "24/10/2024",
      tanggalKembali: "24/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Menunggu",
    },
    {
      alat: "Cangkul",
      tanggalPinjam: "23/10/2024",
      tanggalKembali: "23/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Selesai",
    },
    {
      alat: "Cangkul",
      tanggalPinjam: "24/10/2024",
      tanggalKembali: "24/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Selesai",
    },
    {
      alat: "Cangkul",
      tanggalPinjam: "23/10/2024",
      tanggalKembali: "23/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Selesai",
    },
    {
      alat: "Cangkul",
      tanggalPinjam: "24/10/2024",
      tanggalKembali: "24/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Selesai",
    },
    {
      alat: "Cangkul",
      tanggalPinjam: "23/10/2024",
      tanggalKembali: "23/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Selesai",
    },
    {
      alat: "Cangkul",
      tanggalPinjam: "24/10/2024",
      tanggalKembali: "24/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Selesai",
    },
    {
      alat: "Cangkul",
      tanggalPinjam: "23/10/2024",
      tanggalKembali: "23/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Selesai",
    },
    {
      alat: "Cangkul",
      tanggalPinjam: "24/10/2024",
      tanggalKembali: "24/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Selesai",
    },
    {
      alat: "Cangkul",
      tanggalPinjam: "23/10/2024",
      tanggalKembali: "23/10/2024",
      deskripsi: "dapat digunakan untuk menggali",
      status: "Selesai",
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  const itemsPerPage = 10; // Data per halaman
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Profil/Riwayat</h3>
      <table className={styles.customTable}>
        <thead>
          <tr>
            <th>Alat yang dipinjam</th>
            <th>Tanggal Dipinjam</th>
            <th>Tanggal Kembali</th>
            <th>Deskripsi</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.alat}</td>
              <td>{item.tanggalPinjam}</td>
              <td>{item.tanggalKembali}</td>
              <td>{item.deskripsi}</td>
              <td>
                <span
                  className={
                    item.status === "Menunggu"
                      ? styles.statusMenunggu
                      : styles.statusSelesai
                  }
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button onClick={() => handlePageChange(currentPage - 1)}>
          &laquo;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? styles.active : ""}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)}>
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default RiwayatSection;
