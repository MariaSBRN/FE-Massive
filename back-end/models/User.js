const db = require('../config/db');
const bcrypt = require('bcrypt');

// Fungsi untuk menambahkan user baru
const createUser = async (userData) => {
  const { name, email, password, dob, age, position, role } = userData;

  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO users (name, email, password, dob, age, position, role) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [name, email, password, dob || null, age || null, position || 'Anggota', role || 'anggota'];

    db.query(query, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};


// Fungsi untuk mengambil user berdasarkan email
const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], (err, result) => {
      if (err) return reject(err);
      resolve(result[0]);
    });
  });
};

// Fungsi untuk mengupdate user
const updateUser = (id, updateData) => {
  const { name, dob, age, position, role } = updateData;
  return new Promise((resolve, reject) => {
    const query = `UPDATE users SET name = ?, dob = ?, age = ?, position = ?, role = ? WHERE id = ?`;
    db.query(query, [name, dob, age, position, role, id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

// Fungsi untuk menghapus user berdasarkan ID
const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM users WHERE id = ?`;
    db.query(query, [id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

//Fungsi menampilkan semya user
const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users`;
    db.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

module.exports = { createUser, getUserByEmail, updateUser, deleteUser, getAllUsers };
