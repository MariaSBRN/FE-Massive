const express = require("express");
const router = express.Router();
const { authenticateToken, authorizeAdmin, authorizeAnggota } = require("../middlewares/auth");
const {
  createProyek,
  takeProyek,
  getAllProyekForAdmin,
  getProyekForAnggota,
  deleteProyek,
} = require("../controllers/ProyekTaniController");

// Rute untuk Admin
router.post("/add", authenticateToken, authorizeAdmin, createProyek); // Admin membuat proyek
router.get("/all", authenticateToken, authorizeAdmin, getAllProyekForAdmin); // Admin melihat semua proyek
router.delete("/:proyekId/delete", authenticateToken, authorizeAdmin, deleteProyek); // Admin melihat semua proyek

// Rute untuk Anggota
router.post("/:proyekId/take", authenticateToken, authorizeAnggota, takeProyek); // Anggota mengambil proyek
router.get("/my", authenticateToken, authorizeAnggota, getProyekForAnggota); // Anggota melihat proyek yang dia ambil

module.exports = router;
