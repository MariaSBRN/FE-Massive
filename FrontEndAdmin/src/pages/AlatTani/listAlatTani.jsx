// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import "../../assets/css/admin.css";

const ListAlatTani = () => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/alat-tani-create'); // arahkan ke halaman alat-tani-create
    };

    return (
        <div className="content-wrapper">
            <Sidebar />
            <div className="content-alat-tani" id="content">
                <div className="header-alat-tani">
                    <i className="fas fa-bell"></i>
                    <div className="profile-alat-tani">
                        <i className="fas fa-user-circle"></i> Profil Saya <i className="fas fa-caret-down"></i>
                    </div>
                </div>
                
                <div className="search-container-alat-tani">
                    <input type="text" placeholder="Cari" className="search-input-alat-tani" />
                </div>

                <button className="add-btn-alat-tani" onClick={handleAddClick}>
                    <i className="fas fa-plus"></i> Tambah Alat Tani
                </button>

                <table className="table-alat-tani">
                    <thead>
                        <tr>
                            <th>Nama Alat</th>
                            <th>Status</th>
                            <th>Gambar</th>
                            <th>Deskripsi</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cangkul</td>
                            <td>Tersedia</td>
                            <td><img src="" alt="Gambar Alat" /> </td>
                            <td>Cangkul panjang 1.5 meter</td>
                            <td className="btn-alat-tani">
                                <button className="edit-btn-alat-tani"><i className="fas fa-edit"></i> Edit</button>
                                <button className="delete-btn-alat-tani"><i className="fas fa-trash"></i> Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="pagination-alat-tani">
                    <span className="pagination-btn-alat-tani">&laquo;</span>
                    <span className="page-number-alat-tani active">1</span>
                    <span className="page-number-alat-tani">2</span>
                    <span className="page-number-alat-tani">3</span>
                    <span className="pagination-btn-alat-tani">&raquo;</span>
                </div>
            </div>
        </div>
    );
}

export default ListAlatTani;
