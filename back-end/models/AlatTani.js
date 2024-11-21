const db = require("../config/db");

// Tambah alat tani
exports.createAlatTani = (data) => {
    const { userId, nama, gambar, deskripsi, jumlah, limit_peminjaman } = data;
  
    // Tentukan status berdasarkan jumlah
    const status = jumlah > 0 ? "bisa dipinjam" : "tidak bisa";
  
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO alat_tani (user_id, nama, gambar, deskripsi, jumlah, limit_peminjaman, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
      db.query(
        query,
        [userId, nama, gambar, deskripsi, jumlah, limit_peminjaman, status],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  };
  

// Mengambil alat tani berdasarkan ID
exports.getAlatTaniById = (id) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM alat_tani WHERE id = ?";
      db.query(query, [id], (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) {
          return resolve(null); // Jika tidak ada alat tani ditemukan
        }
        resolve(result[0]); // Mengembalikan data alat tani yang ditemukan
      });
    });
  };
  

// Edit alat tani
exports.updateAlatTani = (id, data) => {
    const { nama, gambar, deskripsi, jumlah, limit_peminjaman } = data;
  
    // Tentukan status berdasarkan jumlah
    const status = jumlah > 0 ? "bisa dipinjam" : "tidak bisa";
  
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE alat_tani SET nama = ?, gambar = ?, deskripsi = ?, jumlah = ?, limit_peminjaman = ?, status = ? WHERE id = ?";
      db.query(
        query,
        [nama, gambar, deskripsi, jumlah, limit_peminjaman, status, id],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  };  

// Hapus alat tani
exports.deleteAlatTaniById = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM alat_tani WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

// Lihat semua alat tani
exports.getAllAlatTani = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM alat_tani";
    db.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

exports.getAllAlatTaniAnggota = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM alat_tani";
    db.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
