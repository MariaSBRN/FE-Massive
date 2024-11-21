const express = require('express');
const router = express.Router();
const {
  addPeminjaman,
  removePeminjaman,
  approveRejectPeminjaman,
  getAllPeminjaman,
  getPeminjamanByUser
} = require('../controllers/PeminjamanController');
const { authenticateToken, authorizeAdmin, authorizeAnggota } = require('../middlewares/auth');

// Route untuk admin
router.get('/all', authenticateToken, authorizeAdmin, getAllPeminjaman); // Admin melihat semua peminjaman
router.patch('/approve-reject/:id', authenticateToken, authorizeAdmin, approveRejectPeminjaman); // Admin menyetujui atau menolak peminjaman

// Route untuk anggota
router.get('/my', authenticateToken, authorizeAnggota, getPeminjamanByUser); // Anggota melihat peminjaman sendiri
router.post('/add', authenticateToken, authorizeAnggota, addPeminjaman); // Anggota menambahkan peminjaman
router.delete('/delete/:id', authenticateToken, authorizeAnggota, removePeminjaman); // Anggota menghapus peminjaman

module.exports = router;
