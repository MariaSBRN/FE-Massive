const { createUser, getUserByEmail, updateUser, deleteUser, getAllUsers } = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Fungsi untuk register user baru (hanya admin yang bisa menambahkan user)
exports.registerUser = async (req, res) => {
  const { name, email, password, dob, age, position, role } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan data user termasuk hashed password
    const result = await createUser({ name, email, password: hashedPassword, dob, age, position, role });

    res.status(201).json({ message: 'User berhasil ditambahkan', userId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambahkan user', error });
  }
};

// Fungsi untuk login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Ambil user dari database berdasarkan email
    const user = await getUserByEmail(email);
    if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });

    // Verifikasi password yang dimasukkan dengan hash password di database
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Password salah' });

    // Jika cocok, buat JWT token
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login berhasil', token });
  } catch (error) {
    res.status(500).json({ message: 'Gagal login', error });
  }
};

exports.logoutUser = (req, res) => {
  res.json({ message: 'Logout berhasil' });
};


// Fungsi untuk update user (hanya admin yang dapat mengubah user)
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    // Update data user
    await updateUser(id, updateData);
    res.json({ message: 'User berhasil diupdate' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengupdate user', error });
  }
};

// Fungsi untuk delete user (hanya admin yang dapat menghapus user)
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Hapus user berdasarkan ID
    await deleteUser(id);
    res.json({ message: 'User berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus user', error });
  }
};

exports.initializeAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Cek apakah sudah ada admin
    const adminExists = await getUserByEmail(email);

    if (adminExists) {
      return res.status(400).json({ message: 'Admin sudah ada. Anda tidak dapat menambahkan admin lain tanpa otorisasi.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat admin baru
    const result = await createUser({
      name,
      email,
      password: hashedPassword,
      dob: null,
      age: null,
      position: 'Admin',
      role: 'admin', // Pastikan role adalah 'admin'
    });

    res.status(201).json({ message: 'Admin berhasil dibuat', userId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Gagal membuat admin', error });
  }
};

// Fungsi untuk menampilkan semua user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({ message: 'Berhasil mengambil semua user', users });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data user', error });
  }
};
