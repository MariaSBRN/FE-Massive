const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeAdmin, authorizeAnggota } = require('../middlewares/auth');
const {
  addAlatTani,
  editAlatTani,
  deleteAlatTani,
  viewAllAlatTani,
  viewAllAlatTaniAnggota,
} = require('../controllers/alatTaniController.js');

// Admin: Tambah alat tani
router.post('/add', authenticateToken, authorizeAdmin, addAlatTani);

// Admin: Edit alat tani
router.put('/update/:id', authenticateToken, authorizeAdmin, editAlatTani);

// Admin: Hapus alat tani
router.delete('/delete/:id', authenticateToken, authorizeAdmin, deleteAlatTani);

// Admin: Lihat semua alat tani
router.get('/all/admin', authenticateToken, authorizeAdmin, viewAllAlatTani);

// Anggota: Lihat semua alat tani
router.get('/all/anggota', authenticateToken, authorizeAnggota, viewAllAlatTaniAnggota);

module.exports = router;