const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware untuk memverifikasi token JWT
exports.authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Akses ditolak, token tidak tersedia' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token tidak valid' });
    req.user = user;
    next();
  });
};

// Middleware untuk otorisasi admin
exports.authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Akses ditolak, bukan admin' });
  next();
};

// Middleware untuk otorisasi anggota
exports.authorizeAnggota = (req, res, next) => {
  if (req.user.role !== 'anggota') return res.status(403).json({ message: 'Akses ditolak, bukan anggota' });
  next();
};
