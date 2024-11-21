// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from "../../components/Sidebar";
import "../../assets/css/admin.css";

const CreateAnggota = () => {
  return (
    <div className="content-wrapper-anggota-create">
      <Sidebar />
      <div className="container-anggota-create">
        <div className="content-anggota-create" id="content-anggota-create">
          <div className="header-anggota-create">
            <i className="fas fa-bell"></i>
            <div className="profile-anggota-create">
              <i className="fas fa-user-circle"></i> Profil Saya <i className="fas fa-caret-down"></i>
            </div>
          </div>

          <div className="form-container-anggota-create">
            <h3>Form Tambah Anggota</h3>
            <form id="anggotaForm">
              <label htmlFor="namaAnggota-anggota-create">Nama Anggota *</label>
              <input type="text" id="namaAnggota-anggota-create" placeholder="Contoh: Sabar Tamba" required />

              <label htmlFor="email-anggota-create">Email *</label>
              <input type="email" id="email-anggota-create" placeholder="Contoh: email@example.com" required />

              <label htmlFor="password-anggota-create">Password *</label>
              <input type="password" id="password-anggota-create" placeholder="Masukkan Password" required />

              <label htmlFor="usia-anggota-create">Usia *</label>
              <input type="number" id="usia-anggota-create" placeholder="Contoh: 25" required />

              <label htmlFor="tanggalLahir-anggota-create">Tanggal Lahir *</label>
              <input type="date" id="tanggalLahir-anggota-create" required />

              <label htmlFor="jenisKelamin-anggota-create">Jenis Kelamin *</label>
              <select id="jenisKelamin-anggota-create" required>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>

              <label htmlFor="alamat-anggota-create">Alamat *</label>
              <input type="text" id="alamat-anggota-create" placeholder="Contoh: Desa Sipangan Bolon" required />

              <label htmlFor="nomorHp-anggota-create">Nomor HP *</label>
              <input type="text" id="nomorHp-anggota-create" placeholder="Contoh: +62 81234567890" required />

              <label htmlFor="jabatan-anggota-create">Jabatan *</label>
              <select id="jabatan-anggota-create" required>
                <option value="anggota">Anggota</option>
                <option value="ketua">Ketua</option>
                <option value="sekretaris">Sekretaris</option>
                <option value="bendahara">Bendahara</option>
                <option value="pic">PIC</option>
              </select>

              <button type="submit">Simpan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAnggota;
