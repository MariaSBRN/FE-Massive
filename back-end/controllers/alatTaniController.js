const {
  createAlatTani,
  updateAlatTani,
  deleteAlatTaniById,
  getAllAlatTani,
  getAllAlatTaniAnggota,
  getAlatTaniById,
} = require("../models/AlatTani");

// Admin: Tambah alat tani
exports.addAlatTani = async (req, res) => {
    const { nama, gambar, deskripsi, jumlah, limit_peminjaman } = req.body;
    const userId = req.user.id; // ID pengguna yang sedang login
  
    console.log('Received data:', { nama, gambar, deskripsi, jumlah, limit_peminjaman }); // Tambahkan log ini
  
    try {
      // Validasi input
      if (!nama || !gambar || !deskripsi || jumlah === undefined || limit_peminjaman === undefined) {
        return res.status(400).json({ message: "Semua data harus diisi" });
      }
  
      const result = await createAlatTani({
        userId,
        nama,
        gambar,
        deskripsi,
        jumlah,
        limit_peminjaman,  // Pastikan parameter ini disertakan
      });
  
      res.status(201).json({
        message: "Alat tani berhasil ditambahkan",
        alatTaniId: result.insertId,
      });
    } catch (error) {
      console.error(error); // Menampilkan error di console server
      res.status(500).json({ message: "Gagal menambahkan alat tani", error: error.message || error });
    }
  };
  

// Admin: Edit alat tani
exports.editAlatTani = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const userId = req.user.id; // ID pengguna yang sedang login
    const userRole = req.user.role; // Role pengguna (admin atau anggota)
  
    try {
      // Validasi input
      if (
        !updateData.nama ||
        !updateData.gambar ||
        !updateData.deskripsi ||
        updateData.jumlah === undefined ||
        updateData.limit_peminjaman === undefined
      ) {
        return res.status(400).json({ message: "Semua data harus diisi" });
      }
  
      // Ambil data alat tani berdasarkan ID
      const alatTani = await getAlatTaniById(id); // Pastikan getAlatTaniById dipanggil dari model
  
      if (!alatTani) {
        return res.status(404).json({ message: "Alat tani tidak ditemukan" });
      }
  
      // Cek apakah pengguna adalah admin atau pemilik alat tani
      if (userRole !== "admin" && alatTani.user_id !== userId) {
        return res.status(403).json({
          message: "Anda tidak memiliki izin untuk mengedit alat tani ini",
        });
      }
  
      // Lanjutkan dengan update
      await updateAlatTani(id, updateData); // Update alat tani
      res.json({ message: "Alat tani berhasil diubah" });
    } catch (error) {
      console.error(error); // Menampilkan error di console server
      res.status(500).json({
        message: "Gagal mengubah alat tani",
        error: error.message || error,
      });
    }
  };
  
// Admin: Hapus alat tani
exports.deleteAlatTani = async (req, res) => {
  const { id } = req.params;
  const userRole = req.user.role; // Mendapatkan role pengguna yang sedang login

  try {
    // Cek apakah pengguna yang login adalah admin
    if (userRole !== "admin") {
      return res
        .status(403)
        .json({ message: "Anda tidak berhak menghapus alat tani ini" });
    }

    // Jika admin, lanjutkan dengan menghapus alat tani
    await deleteAlatTaniById(id);
    res.json({ message: "Alat tani berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus alat tani", error });
  }
};

// Semua: Lihat semua alat tani
exports.viewAllAlatTani = async (req, res) => {
  try {
    const alatTani = await getAllAlatTani();
    res.json({
      message: "Berhasil mendapatkan semua alat tani",
      data: alatTani,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal mendapatkan data alat tani", error });
  }
};

exports.viewAllAlatTaniAnggota = async (req, res) => {
  try {
    const alatTani = await getAllAlatTaniAnggota();
    res.json({
      message: "Berhasil mendapatkan semua alat tani",
      data: alatTani,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal mendapatkan data alat tani", error });
  }
};
