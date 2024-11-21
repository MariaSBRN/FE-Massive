const db = require('../config/db');

// Menambahkan peminjaman
exports.createPeminjaman = async (data) => {
  const { userId, alatTaniId, tanggalPengembalian, jumlah, deskripsi } = data;

  try {
    // Ambil stok dan limit peminjaman dari alat_tani
    const [alatTani] = await db.promise().query(
      'SELECT jumlah, limit_peminjaman FROM alat_tani WHERE id = ?',
      [alatTaniId]
    );

    if (alatTani.length === 0) {
      throw new Error('Alat tani tidak ditemukan');
    }

    const { jumlah: stok, limit_peminjaman } = alatTani[0];

    if (jumlah > stok) {
      throw new Error('Jumlah yang dipinjam melebihi stok alat tani');
    }

    if (jumlah > limit_peminjaman) {
      throw new Error('Jumlah yang dipinjam melebihi limit peminjaman');
    }

    // Tambahkan peminjaman ke database
    const [result] = await db.promise().query(
      `
      INSERT INTO peminjaman (user_id, alat_tani_id, tanggal_pengembalian, jumlah, deskripsi)
      VALUES (?, ?, ?, ?, ?)
      `,
      [userId, alatTaniId, tanggalPengembalian, jumlah, deskripsi]
    );

    return result;
  } catch (error) {
    throw error;
  }
};

// Menghapus peminjaman
exports.deletePeminjamanById = async (id) => {
  try {
    // Ambil status peminjaman berdasarkan id
    const [peminjaman] = await db.promise().query('SELECT status FROM peminjaman WHERE id = ?', [id]);

    if (peminjaman.length === 0) {
      throw new Error('Peminjaman tidak ditemukan');
    }

    // Cek apakah statusnya sudah approved
    if (peminjaman[0].status === 'approved') {
      throw new Error('Peminjaman dengan status approved tidak bisa dihapus');
    }

    // Lakukan penghapusan
    const [result] = await db.promise().query('DELETE FROM peminjaman WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      throw new Error('Gagal menghapus peminjaman');
    }

    return result;
  } catch (error) {
    throw error;
  }
};


// Menyetujui atau menolak peminjaman
exports.updatePeminjamanStatus = async (id, status) => {
  if (status !== 'approved' && status !== 'rejected') {
    throw new Error('Status tidak valid');
  }

  try {
    // Ambil data peminjaman
    const [peminjaman] = await db.promise().query('SELECT * FROM peminjaman WHERE id = ?', [id]);

    if (peminjaman.length === 0) {
      throw new Error('Peminjaman tidak ditemukan');
    }

    const { jumlah, alat_tani_id } = peminjaman[0];

    if (status === 'approved') {
      // Kurangi stok alat_tani jika disetujui
      await db.promise().query('UPDATE alat_tani SET jumlah = jumlah - ? WHERE id = ?', [
        jumlah,
        alat_tani_id,
      ]);
    }

    // Perbarui status peminjaman
    const [result] = await db.promise().query('UPDATE peminjaman SET status = ? WHERE id = ?', [
      status,
      id,
    ]);

    return result;
  } catch (error) {
    throw error;
  }
};

// Mengambil semua peminjaman (untuk admin)
exports.getAllPeminjaman = async () => {
  try {
    const [result] = await db.promise().query(
      `
      SELECT 
        p.id,
        u.name AS peminjam,
        a.nama AS alat_tani,
        p.tanggal_pengembalian,
        p.jumlah,
        p.deskripsi,
        p.status,
        p.created_at
      FROM peminjaman p
      JOIN users u ON p.user_id = u.id
      JOIN alat_tani a ON p.alat_tani_id = a.id
      ORDER BY p.created_at DESC
      `
    );

    return result;
  } catch (error) {
    throw error;
  }
};

// Mengambil peminjaman berdasarkan user (untuk user)
exports.getPeminjamanByUser = async (userId) => {
  try {
    const [result] = await db.promise().query(
      `
      SELECT 
        p.id,
        a.nama AS alat_tani,
        p.tanggal_pengembalian,
        p.jumlah,
        p.deskripsi,
        p.status,
        p.created_at
      FROM peminjaman p
      JOIN alat_tani a ON p.alat_tani_id = a.id
      WHERE p.user_id = ?
      ORDER BY p.created_at DESC
      `,
      [userId]
    );

    return result;
  } catch (error) {
    throw error;
  }
};
