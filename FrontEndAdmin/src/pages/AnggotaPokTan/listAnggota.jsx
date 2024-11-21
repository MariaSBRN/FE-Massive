// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../../components/Sidebar';
import "../../assets/css/admin.css";
import { useNavigate } from 'react-router-dom';

const ListAnggota = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
      navigate('/anggota-kelompok-tani-create'); // arahkan ke halaman alat-tani-create
  };

  return (
    <div className="content-wrapper">
      <Sidebar />
      <div className="content" id="content">
        <div className="header">
          <i className="fas fa-bell"></i>
          <div className="profile">
            <i className="fas fa-user-circle"></i> Profil Saya <i className="fas fa-caret-down"></i>
          </div>
        </div>
        
        <div className="search-container">
          <input type="text" placeholder="Cari Anggota disini..." className="search-input" />
        </div>

        <button className="add-member-btn" onClick={handleAddClick}>
          <i className="fas fa-plus"></i> Tambah Anggota
        </button>

        <table className="member-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Usia</th>
              <th>Jenis Kelamin</th>
              <th>Alamat</th>
              <th>Jabatan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amangkurat Sitorus</td>
              <td>56 Tahun</td>
              <td>Laki-laki</td>
              <td>Desa Pandumaan</td>
              <td>Anggota</td>
              <td className="edit-delete-btn-anggota">
                <button className="edit-btn"><i className="fas fa-edit"></i> Edit</button>
                <button className="delete-btn"><i className="fas fa-trash"></i> Delete</button>
              </td>
            </tr>
            <tr>
              <td>Amangkurat Sitorus</td>
              <td>56 Tahun</td>
              <td>Laki-laki</td>
              <td>Desa Pandumaan</td>
              <td>Anggota</td>
              <td className="edit-delete-btn-anggota">
                <button className="edit-btn"><i className="fas fa-edit"></i> Edit</button>
                <button className="delete-btn"><i className="fas fa-trash"></i> Delete</button>
              </td>
            </tr>
            <tr>
              <td>Amangkurat Sitorus</td>
              <td>56 Tahun</td>
              <td>Laki-laki</td>
              <td>Desa Pandumaan</td>
              <td>Anggota</td>
              <td className="edit-delete-btn-anggota">
                <button className="edit-btn"><i className="fas fa-edit"></i> Edit</button>
                <button className="delete-btn"><i className="fas fa-trash"></i> Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="pagination">
          <span className="pagination-btn">&laquo;</span>
          <span className="page-number active">1</span>
          <span className="page-number">2</span>
          <span className="page-number">3</span>
          <span className="pagination-btn">&raquo;</span>
        </div>
      </div>
    </div>
  );
};

export default ListAnggota;
