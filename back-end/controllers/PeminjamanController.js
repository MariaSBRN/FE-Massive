const {
  createPeminjaman,
  deletePeminjamanById,
  updatePeminjamanStatus,
  getAllPeminjaman,
  getPeminjamanByUser,
} = require('../models/Peminjaman');

// Menambahkan peminjaman
exports.addPeminjaman = async (req, res) => {
  const { alatTaniId, tanggalPengembalian, jumlah, deskripsi } = req.body;
  const userId = req.user.id;

  try {
    const result = await createPeminjaman({
      userId,
      alatTaniId,
      tanggalPengembalian,
      jumlah,
      deskripsi,
    });
    res.status(201).json({ message: 'Peminjaman berhasil ditambahkan', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambahkan peminjaman', error: error.message });
  }
};

// Menghapus peminjaman (hanya untuk anggota yang bisa menghapus peminjaman mereka sendiri)
exports.removePeminjaman = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    // Pastikan peminjaman yang akan dihapus milik pengguna yang sedang login
    const [peminjaman] = await db.promise().query('SELECT * FROM peminjaman WHERE id = ? AND user_id = ?', [id, userId]);

    if (peminjaman.length === 0) {
      return res.status(403).json({ message: 'Tidak bisa menghapus peminjaman ini' });
    }

    // Panggil model untuk menghapus peminjaman
    await deletePeminjamanById(id);

    res.json({ message: 'Peminjaman berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus peminjaman', error: error.message });
  }
};


// Menyetujui atau menolak peminjaman (hanya untuk admin)
exports.approveRejectPeminjaman = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // 'approved' atau 'rejected'

  try {
    await updatePeminjamanStatus(id, status);
    res.json({ message: `Peminjaman berhasil ${status}` });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengubah status peminjaman', error: error.message });
  }
};

// Menampilkan semua peminjaman (untuk admin)
exports.getAllPeminjaman = async (req, res) => {
  try {
    const peminjaman = await getAllPeminjaman();
    res.json({ message: 'Berhasil mengambil daftar peminjaman', data: peminjaman });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data peminjaman', error: error.message });
  }
};

// Menampilkan peminjaman milik user tertentu
exports.getPeminjamanByUser = async (req, res) => {
  const userId = req.user.id;

  try {
    const peminjaman = await getPeminjamanByUser(userId);
    res.json({ message: 'Berhasil mengambil daftar peminjaman', data: peminjaman });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data peminjaman', error: error.message });
  }
};
