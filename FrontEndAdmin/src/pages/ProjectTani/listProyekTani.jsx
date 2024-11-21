// eslint-disable-next-line no-unused-vars
import React from 'react';
import "../../assets/css/admin.css";
import Sidebar from "../../components/Sidebar";


const ListProyekTani = () => {
  return (
    <div className="content-wrapper">
    <Sidebar/>
    <div className="content" id="content">
      <div className="header">
        <i className="fas fa-bell"></i>
        <div className="profile">
          <i className="fas fa-user-circle"></i> Profil Saya <i className="fas fa-caret-down"></i>
        </div>
      </div>
      
      <div className="table-container">
        <div className="table-header">
          <h3>Daftar Projek Tani</h3>
          <button className="add-button"><i className="fas fa-plus"></i> Tambah Projek Tani</button>
        </div>
        <input type="text" className="search-input" placeholder="Cari..." />
        <table className="project-table">
          <thead>
            <tr>
              <th>Nama Projek</th>
              <th>Deskripsi</th>
              <th>Status</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Array(9).fill().map((_, index) => (
              <tr key={index}>
                <td>Budidaya Padi Organik</td>
                <td>Menanam padi tanpa pestisida</td>
                <td>Selesai</td>
                <td>19/04/2024</td>
                <td className="action-edit">
                  <button className="edit-btn"><i className="fas fa-edit"></i> Edit</button>
                  <button className="delete-btn"><i className="fas fa-trash-alt"></i> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button className="pagination-btn">«</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">»</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ListProyekTani;
