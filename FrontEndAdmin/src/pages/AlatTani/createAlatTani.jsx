// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from "../../components/Sidebar";
import "../../assets/css/admin.css"

const CreateAlatTani = () => {
  return (
    <div className="content-wrapper">
    <Sidebar />
    <div className="container">
      <div className="content" id="content">
        <div className="header">
          <i className="fas fa-bell"></i>
          <div className="profile">
            <i className="fas fa-user-circle"></i> Profil Saya <i className="fas fa-caret-down"></i>
          </div>
        </div>

        <div className="form-container">
          <h3>Form Tambah Alat Tani</h3>
          <form id="alatTaniForm">
            <label htmlFor="namaAlat">Nama Alat Tani *</label>
            <input type="text" id="namaAlat" placeholder="Rotavator" required />

            <label htmlFor="status">Status *</label>
            <select id="status" required>
              <option value="Tersedia">Tersedia</option>
              <option value="Dipinjam">Dipinjam</option>
            </select>

            <label htmlFor="gambar">Gambar *</label>
            <input type="file" id="gambar" required />

            <label htmlFor="deskripsi">Deskripsi *</label>
            <input type="text" id="deskripsi" placeholder="Keadaan Bagus" required />

            <button type="submit">Simpan</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CreateAlatTani;
