const { createPengembalian, getPengembalianByUser, getAllPengembalian } = require('../models/Pengembalian');
const multer = require('multer');

// Setup multer untuk upload bukti pengembalian
const upload = multer({ dest: 'uploads/' });

// Membuat pengembalian
exports.addPengembalian = async (req, res) => {
  const { idPeminjaman } = req.body;
  const userId = req.user.id;

  // Mendapatkan bukti pengembalian dari upload
  const buktiPengembalian = req.file ? req.file.path : null;

  if (!buktiPengembalian) {
    return res.status(400).json({ message: 'Bukti pengembalian harus diunggah' });
  }

  try {
    const result = await createPengembalian({ idPeminjaman, userId, buktiPengembalian });
    res.status(201).json({ message: 'Pengembalian berhasil dibuat', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Gagal membuat pengembalian', error: error.message });
  }
};

// Melihat daftar pengembalian berdasarkan user yang sedang login (untuk anggota)
exports.getPengembalianByUser = async (req, res) => {
    const userId = req.user.id;
  
    try {
      const result = await getPengembalianByUser(userId);
      res.json({ message: 'Daftar pengembalian berhasil diambil', data: result });
    } catch (error) {
      res.status(500).json({ message: 'Gagal mengambil daftar pengembalian', error: error.message });
    }
  };
  
  // Melihat semua pengembalian (untuk admin)
  exports.getAllPengembalian = async (req, res) => {
    try {
      const result = await getAllPengembalian();
      res.json({ message: 'Daftar pengembalian berhasil diambil', data: result });
    } catch (error) {
      res.status(500).json({ message: 'Gagal mengambil semua pengembalian', error: error.message });
    }
  };