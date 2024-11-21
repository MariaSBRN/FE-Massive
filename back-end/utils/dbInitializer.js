const db = require("../config/db");

const initializeTables = () => {
  const tableDefinitions = [
    `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      dob DATE,
      age INT,
      position VARCHAR(255),
      role ENUM('admin', 'anggota') DEFAULT 'anggota',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS alat_tani (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      nama VARCHAR(255) NOT NULL,
      gambar VARCHAR(255),
      deskripsi TEXT,
      jumlah INT NOT NULL,
      limit_peminjaman INT NOT NULL, 
      status ENUM('bisa dipinjam', 'tidak bisa') DEFAULT 'tidak bisa',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
    `,
    // Tabel peminjaman
    `
     CREATE TABLE IF NOT EXISTS peminjaman (
       id INT AUTO_INCREMENT PRIMARY KEY,
       user_id INT NOT NULL,
       alat_tani_id INT NOT NULL,
       tanggal_pengembalian DATE NOT NULL,
       jumlah INT NOT NULL,
       deskripsi TEXT,
       status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (user_id) REFERENCES users(id),
       FOREIGN KEY (alat_tani_id) REFERENCES alat_tani(id) ON DELETE CASCADE
     )
     `,
    //Tabel Pengembalian
    `
    CREATE TABLE IF NOT EXISTS pengembalian (
      id INT AUTO_INCREMENT PRIMARY KEY,
      id_peminjaman INT NOT NULL,
      user_id INT NOT NULL,
      bukti_pengembalian VARCHAR(255),
      status_pengembalian ENUM('tepat waktu', 'telat'),
      denda INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (id_peminjaman) REFERENCES peminjaman(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    `,

    //Tabel proyek_tani
    `
  CREATE TABLE IF NOT EXISTS proyek_tani (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_proyek VARCHAR(255) NOT NULL,
    deskripsi TEXT NOT NULL,
    admin_id INT NOT NULL,
    anggota_ids JSON DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE CASCADE
  );
    `,

  `
  CREATE TABLE IF NOT EXISTS hasil_panen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    proyek_id INT NOT NULL,
    user_id INT NOT NULL,
    hasil VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (proyek_id) REFERENCES proyek_tani(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE  
  );


  `,
  ];

  tableDefinitions.forEach((query, index) => {
    db.query(query, (err) => {
      if (err) {
        console.error(`Failed to create table ${index + 1}:`, err);
      } else {
        console.log(`Table ${index + 1} sudah ada`);
      }
    });
  });
};

module.exports = initializeTables;
