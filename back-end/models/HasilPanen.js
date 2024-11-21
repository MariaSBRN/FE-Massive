const db = require("../config/db");

exports.isUserInProyek = (proyekId, userId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT anggota_ids FROM proyek_tani WHERE id = ?";
    db.query(query, [proyekId], (err, result) => {
      if (err) return reject(err);
      if (result.length === 0) return reject(new Error("Proyek tidak ditemukan"));

      const anggotaIds = result[0].anggota_ids ? JSON.parse(result[0].anggota_ids) : [];
      if (!anggotaIds.includes(userId)) return reject(new Error("User tidak terdaftar di proyek ini"));

      resolve(true);
    });
  });
};


exports.createHasilPanen = (data) => {
  const { proyekId, userId, hasil, deskripsi } = data;

  return new Promise(async (resolve, reject) => {
    try {
      // Validasi apakah user ada di proyek ini
      await exports.isUserInProyek(proyekId, userId);

      // Insert hasil panen
      const query = `
        INSERT INTO hasil_panen (proyek_id, user_id, hasil, deskripsi)
        VALUES (?, ?, ?, ?)
      `;
      db.query(query, [proyekId, userId, hasil, deskripsi], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
};


exports.updateHasilPanenById = (id, data) => {
  const { hasil, deskripsi } = data;

  return new Promise((resolve, reject) => {
    const query = `
      UPDATE hasil_panen
      SET hasil = ?, deskripsi = ?
      WHERE id = ?
    `;
    db.query(query, [hasil, deskripsi, id], (err, result) => {
      if (err) return reject(err);
      if (result.affectedRows === 0) return reject(new Error("Hasil panen tidak ditemukan"));
      resolve(result);
    });
  });
};



exports.deleteHasilPanenById = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM hasil_panen WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) return reject(err);
      if (result.affectedRows === 0) return reject(new Error("Hasil panen tidak ditemukan"));
      resolve(result);
    });
  });
};


exports.getAllHasilPanen = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM hasil_panen";
    db.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

/**
 * Mengambil hasil panen berdasarkan ID proyek
 * @param {number} proyekId - ID proyek tani
 * @returns {Promise<object[]>}
 */
exports.getHasilPanenByProyekId = (proyekId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM hasil_panen WHERE proyek_id = ?";
    db.query(query, [proyekId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

/**
 * Mengambil hasil panen berdasarkan ID user
 * @param {number} userId - ID user
 * @returns {Promise<object[]>}
 */
exports.getHasilPanenByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM hasil_panen WHERE user_id = ?";
    db.query(query, [userId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
