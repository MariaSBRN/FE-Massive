const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  logoutUser,
  getAllUsers,
} = require("../controllers/userController");
const { authenticateToken, authorizeAdmin } = require("../middlewares/auth");
const { initializeAdmin } = require("../controllers/userController");

// Route untuk register user (admin dapat menambahkan user)
router.post("/register", authenticateToken, authorizeAdmin, registerUser);

// Route untuk login user
router.post("/login", loginUser);
router.post("/initialize-admin", initializeAdmin); //admin account route
router.post("/logout", authenticateToken, logoutUser);

// Route untuk update user (admin)
router.put("/update/:id", authenticateToken, authorizeAdmin, updateUser);

// Route untuk delete user (admin)
router.delete("/delete/:id", authenticateToken, authorizeAdmin, deleteUser);

// Route untuk mendapatkan semua user
router.get("/all", authenticateToken, authorizeAdmin, getAllUsers);

module.exports = router;
