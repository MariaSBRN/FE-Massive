const db = require("../config/db");
const path = require("path");

exports.createPengembalian = async (data) => {
  const { idPeminjaman, userId, buktiPengembalian } = data;

  console.log("ID Peminjaman:", idPeminjaman);
  console.log("User ID:", userId);
  console.log("Bukti Pengembalian Path:", buktiPengembalian);

  try {
    // Ambil data peminjaman untuk validasi
    const [peminjaman] = await db
      .promise()
      .query("SELECT * FROM peminjaman WHERE id = ? AND user_id = ?", [
        idPeminjaman,
        userId,
      ]);

    if (peminjaman.length === 0) {
      throw new Error("Peminjaman tidak ditemukan atau bukan milik user ini");
    }

    const { tanggal_pengembalian, status, alat_tani_id, jumlah } = peminjaman[0];

    // Cek status peminjaman, hanya yang approved yang bisa dikembalikan
    if (status !== "approved") {
      throw new Error("Peminjaman belum disetujui, tidak bisa dikembalikan");
    }
    console.log("Status Peminjaman:", status);

    // Hitung status pengembalian dan denda
    const now = new Date();
    const dueDate = new Date(tanggal_pengembalian);
    const isLate = now > dueDate;
    const daysLate = isLate
      ? Math.ceil((now - dueDate) / (1000 * 60 * 60 * 24))
      : 0;
    const denda = daysLate * 20000;

    const statusPengembalian = isLate ? "telat" : "tepat waktu";

    // Simpan data pengembalian ke database
    const [result] = await db.promise().query(
      `
        INSERT INTO pengembalian (id_peminjaman, user_id, bukti_pengembalian, status_pengembalian, denda)
        VALUES (?, ?, ?, ?, ?)
      `,
      [idPeminjaman, userId, buktiPengembalian, statusPengembalian, denda]
    );

    // Update jumlah alat pada tabel alat_tani
    await db.promise().query(
      `
        UPDATE alat_tani
        SET jumlah = jumlah + ?
        WHERE id = ?
      `,
      [jumlah, alat_tani_id]
    );
    console.log("Jumlah alat berhasil diperbarui.");

    return result;
  } catch (error) {
    throw error;
  }
};


// Mengambil pengembalian berdasarkan user_id (untuk anggota)
exports.getPengembalianByUser = async (userId) => {
  try {
    const [result] = await db.promise().query(
      `
        SELECT 
          p.id AS pengembalian_id,
          p.id_peminjaman,
          p.status_pengembalian,
          p.denda,
          p.bukti_pengembalian,
          p.created_at AS tanggal_pengembalian
        FROM pengembalian p
        JOIN peminjaman pm ON p.id_peminjaman = pm.id
        WHERE pm.user_id = ?
        ORDER BY p.created_at DESC
        `,
      [userId]
    );
    return result;
  } catch (error) {
    throw error;
  }
};

// Mengambil semua pengembalian (untuk admin)
exports.getAllPengembalian = async () => {
  try {
    const [result] = await db.promise().query(
      `
        SELECT 
          p.id AS pengembalian_id,
          p.id_peminjaman,
          p.status_pengembalian,
          p.denda,
          p.bukti_pengembalian,
          p.created_at AS tanggal_pengembalian,
          u.name AS peminjam
        FROM pengembalian p
        JOIN peminjaman pm ON p.id_peminjaman = pm.id
        JOIN users u ON pm.user_id = u.id
        ORDER BY p.created_at DESC
        `
    );
    return result;
  } catch (error) {
    throw error;
  }
};
