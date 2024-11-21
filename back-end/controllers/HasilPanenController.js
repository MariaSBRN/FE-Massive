const {
  createHasilPanen,
  updateHasilPanenById,
  deleteHasilPanenById,
  getAllHasilPanen,
  getHasilPanenByProyekId,
  getHasilPanenByUserId,
} = require("../models/HasilPanen");

// Admin membuat hasil panen dengan validasi user
exports.createHasil = async (req, res) => {
  const { proyekId, userId, hasil, deskripsi } = req.body;

  try {
    const result = await createHasilPanen({
      proyekId,
      userId,
      hasil,
      deskripsi,
    });
    res
      .status(201)
      .json({ message: "Hasil panen berhasil dibuat", id: result.insertId });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Gagal membuat hasil panen", error: error.message });
  }
};

// Admin mengupdate hasil panen
exports.updateHasil = async (req, res) => {
  const { id } = req.params;
  const { hasil, deskripsi } = req.body;

  try {
    await updateHasilPanenById(id, { hasil, deskripsi });
    res.status(200).json({ message: "Hasil panen berhasil diperbarui" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Gagal memperbarui hasil panen", error: error.message });
  }
};

// Admin menghapus hasil panen
exports.deleteHasil = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteHasilPanenById(id);
    res.status(200).json({ message: "Hasil panen berhasil dihapus" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Gagal menghapus hasil panen", error: error.message });
  }
};

// Admin melihat semua hasil panen
exports.getAllHasil = async (req, res) => {
  try {
    const hasil = await getAllHasilPanen();
    res
      .status(200)
      .json({ message: "Berhasil mendapatkan semua hasil panen", data: hasil });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal mendapatkan hasil panen", error: error.message });
  }
};

// Admin melihat hasil panen berdasarkan ID proyek
exports.getHasilByProyek = async (req, res) => {
  const { proyekId } = req.params;

  try {
    const hasil = await getHasilPanenByProyekId(proyekId);
    res
      .status(200)
      .json({ message: "Berhasil mendapatkan hasil panen", data: hasil });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Gagal mendapatkan hasil panen", error: error.message });
  }
};

// Anggota melihat hasil panen mereka sendiri
exports.getHasilByUser = async (req, res) => {
  const userId = req.user.id;

  try {
    const hasil = await getHasilPanenByUserId(userId);
    res
      .status(200)
      .json({ message: "Berhasil mendapatkan hasil panen", data: hasil });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Gagal mendapatkan hasil panen", error: error.message });
  }
};
