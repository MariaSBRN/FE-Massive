const express = require("express");
const {
  createHasil,
  updateHasil,
  deleteHasil,
  getAllHasil,
  getHasilByProyek,
  getHasilByUser,
} = require("../controllers/HasilPanenController");
const { authenticateToken, authorizeAdmin, authorizeAnggota } = require("../middlewares/auth");

const router = express.Router();

// Admin routes
router.post("/add", authenticateToken, authorizeAdmin, createHasil);
router.put("/update/:id", authenticateToken, authorizeAdmin, updateHasil);
router.delete("/delete/:id", authenticateToken, authorizeAdmin, deleteHasil);
router.get("/all", authenticateToken, authorizeAdmin, getAllHasil);
router.get("/all/:proyekId", authenticateToken, authorizeAdmin, getHasilByProyek);

// Anggota route
router.get("/my", authenticateToken, authorizeAnggota, getHasilByUser);

module.exports = router;
