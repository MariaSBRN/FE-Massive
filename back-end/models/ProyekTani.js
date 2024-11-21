const db = require("../config/db");

// Admin membuat proyek tani
exports.createProyekTani = (data) => {
  const { namaProyek, deskripsi, adminId } = data;

  return new Promise((resolve, reject) => {
    const query = `
        INSERT INTO proyek_tani (nama_proyek, deskripsi, admin_id)
        VALUES (?, ?, ?)
      `;
    db.query(query, [namaProyek, deskripsi, adminId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

// Anggota mengambil proyek tani
exports.takeProyekTani = (proyekId, anggotaId) => {
  return new Promise((resolve, reject) => {
    // Ambil daftar anggota saat ini
    const selectQuery = "SELECT anggota_ids FROM proyek_tani WHERE id = ?";
    db.query(selectQuery, [proyekId], (err, result) => {
      if (err) return reject(err);
      if (result.length === 0)
        return reject(new Error("Proyek tidak ditemukan"));

      const anggotaIds = result[0].anggota_ids
        ? JSON.parse(result[0].anggota_ids)
        : [];

      // Cek apakah anggota sudah terdaftar
      if (anggotaIds.includes(anggotaId)) {
        return reject(new Error("Anda sudah mengambil proyek ini"));
      }

      // Tambahkan anggota baru
      anggotaIds.push(anggotaId);
      const updatedAnggotaIds = JSON.stringify(anggotaIds);

      const updateQuery = "UPDATE proyek_tani SET anggota_ids = ? WHERE id = ?";
      db.query(
        updateQuery,
        [updatedAnggotaIds, proyekId],
        (err, updateResult) => {
          if (err) return reject(err);
          resolve(updateResult);
        }
      );
    });
  });
};

// Ambil semua proyek yang diambil anggota
exports.getProyekTaniByAnggota = (anggotaId) => {
  return new Promise((resolve, reject) => {
    const query = `
        SELECT * FROM proyek_tani
        WHERE JSON_CONTAINS(anggota_ids, JSON_ARRAY(?))
      `;
    db.query(query, [anggotaId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

// Ambil semua proyek tani
exports.getAllProyekTani = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM proyek_tani";
    db.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

// Hapus proyek tani berdasarkan ID
exports.deleteProyekTaniById = (proyekId) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM proyek_tani WHERE id = ?";
    db.query(query, [proyekId], (err, result) => {
      if (err) return reject(err);
      if (result.affectedRows === 0) {
        return reject(new Error("Proyek tidak ditemukan"));
      }
      resolve(result);
    });
  });
};
