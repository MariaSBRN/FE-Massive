const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const initializeTables = require('./utils/dbInitializer');
const userRoutes = require('./routes/userRoutes');
const alatTaniRoutes = require('./routes/alatTaniRoute');
const peminjamanRoutes = require("./routes/peminjamanRoutes");
const pengembalianRoutes = require("./routes/pengembalianRoutes");
const projectTaniRoutes = require("./routes/proyekTaniRoutes");
const HasilPanenRoutes = require("./routes/hasilPanenRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Inisialisasi tabel
initializeTables();

// Rute pengguna
app.use('/api/users', userRoutes);

// Rute alat tani
app.use('/api/alat-tani', alatTaniRoutes);

app.use("/api/peminjaman", peminjamanRoutes);

app.use("/api/pengembalian", pengembalianRoutes);

app.use("/api/projectTani", projectTaniRoutes);
app.use("/api/hasilPanen", HasilPanenRoutes);
// Route utama
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
