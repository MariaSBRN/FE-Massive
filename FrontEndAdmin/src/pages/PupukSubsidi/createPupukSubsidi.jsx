// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from '../../components/Sidebar'
import "../../assets/css/admin.css"

const CreatePupukSubsidi = () => {
  return (
    <div className="content-wrapper-pupuk-subsidi">
      <Sidebar />
      <div className="container-pupuk-subsidi">
        <div className="content-pupuk-subsidi" id="content-pupuk-subsidi">
          <div className="header-pupuk-subsidi">
            <i className="fas fa-bell"></i>
            <div className="profile-pupuk-subsidi">
              <i className="fas fa-user-circle"></i> Profil Saya <i className="fas fa-caret-down"></i>
            </div>
          </div>

          <div className="form-container-pupuk-subsidi">
            <h3>Form Tambah Pupuk Subsidi</h3>
            <form id="pupukSubsidiForm">
              <label htmlFor="namaPupuk">Nama Pupuk Subsidi *</label>
              <input type="text" id="namaPupuk" placeholder="Contoh: Urea" required />

              <label htmlFor="tanggalDistribusi">Tanggal Distribusi</label>
              <input type="date" id="tanggalDistribusi" />

              <label htmlFor="jumlahPupuk">Jumlah Pupuk</label>
              <input type="number" id="jumlahPupuk" placeholder="Contoh: 100 kg" />

              <label htmlFor="jenisPupuk">Jenis Pupuk *</label>
              <select id="jenisPupuk" required>
                <option value="kimia">Kimia</option>
                <option value="organik">Organik</option>
                <option value="lainnya">Lainnya</option>
              </select>

              <label htmlFor="kualitas">Kualitas</label>
              <input type="text" id="kualitas" placeholder="Contoh: Sangat Baik" />

              <button type="submit">Simpan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePupukSubsidi
