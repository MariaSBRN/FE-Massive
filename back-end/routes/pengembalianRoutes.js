const express = require('express');
const router = express.Router();
const { addPengembalian, getPengembalianByUser, getAllPengembalian } = require('../controllers/PengembalianController');
const { authenticateToken, authorizeAnggota, authorizeAdmin } = require('../middlewares/auth');
const multer = require('multer');

// Middleware multer untuk upload file
const upload = multer({ dest: 'uploads/' });

// Endpoint untuk pengembalian
router.post('/add', authenticateToken, authorizeAnggota, upload.single('bukti_pengembalian'), addPengembalian);

// Endpoint untuk melihat pengembalian milik user (anggota)
router.get('/user', authenticateToken, authorizeAnggota, getPengembalianByUser);

// Endpoint untuk melihat semua pengembalian (admin)
router.get('/all', authenticateToken, authorizeAdmin, getAllPengembalian);

module.exports = router;
