const {
  getAllProyekTani,
  takeProyekTani,
  getProyekTaniByAnggota,
  createProyekTani,
  deleteProyekTaniById,
} = require("../models/ProyekTani");

// Admin membuat proyek tani
exports.createProyek = async (req, res) => {
  const { namaProyek, deskripsi } = req.body;
  const adminId = req.user.id; // ID admin yang sedang login

  try {
    // Validasi input
    if (!namaProyek || !deskripsi) {
      return res
        .status(400)
        .json({ message: "Nama proyek dan deskripsi harus diisi" });
    }

    const result = await createProyekTani({ namaProyek, deskripsi, adminId });
    res.status(201).json({
      message: "Proyek tani berhasil dibuat",
      proyekId: result.insertId,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal membuat proyek tani", error: error.message });
  }
};

// Anggota mengambil proyek tani
exports.takeProyek = async (req, res) => {
  const { proyekId } = req.params;
  const anggotaId = req.user.id;

  try {
    await takeProyekTani(proyekId, anggotaId);
    res.status(200).json({ message: "Berhasil mengambil proyek tani" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Admin melihat semua proyek tani
exports.getAllProyekForAdmin = async (req, res) => {
  try {
    const proyekList = await getAllProyekTani();
    res.status(200).json({
      message: "Berhasil mendapatkan semua proyek tani",
      data: proyekList,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal mendapatkan proyek tani", error: error.message });
  }
};

// Anggota melihat proyek yang diambil
exports.getProyekForAnggota = async (req, res) => {
  const anggotaId = req.user.id;

  try {
    const proyekList = await getProyekTaniByAnggota(anggotaId);
    res.status(200).json({
      message: "Berhasil mendapatkan proyek tani",
      data: proyekList,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Admin menghapus proyek tani
exports.deleteProyek = async (req, res) => {
  const { proyekId } = req.params;

  try {
    await deleteProyekTaniById(proyekId);
    res.status(200).json({ message: "Proyek tani berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ message: "Gagal menghapus proyek tani", error: error.message });
  }
};