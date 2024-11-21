// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import "../../assets/css/admin.css";

const ListHasilPanen = () => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/hasil-panen-create'); // Redirect to the page for adding new harvest entries
    };

    return (
        <div className="content-wrapper-hasil-panen">
            <Sidebar />
            <div className="content-hasil-panen" id="content">
                <div className="header-hasil-panen">
                    <i className="fas fa-bell"></i>
                    <div className="profile-hasil-panen">
                        <i className="fas fa-user-circle"></i> Profil Saya <i className="fas fa-caret-down"></i>
                    </div>
                </div>
                
                <div className="search-container-hasil-panen">
                    <input type="text" placeholder="Cari" className="search-input-hasil-panen" />
                </div>

                <button className="add-btn-hasil-panen" onClick={handleAddClick}>
                    <i className="fas fa-plus"></i> Tambah Hasil Panen
                </button>

                <table className="table-hasil-panen">
                    <thead>
                        <tr>
                            <th>Nama Produk</th>
                            <th>Tanggal Panen</th>
                            <th>Jumlah Panen(kg)</th>
                            <th>Kualitas</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bawang Merah</td>
                            <td>15/03/2024</td>
                            <td>100</td>
                            <td>Baik</td>
                            <td className="btn-hasil-panen">
                                <button className="edit-btn-hasil-panen"><i className="fas fa-edit"></i> Edit</button>
                                <button className="delete-btn-hasil-panen"><i className="fas fa-trash"></i> Hapus</button>
                            </td>
                        </tr>
                        {/* Additional rows can go here */}
                    </tbody>
                </table>

                <div className="pagination-hasil-panen">
                    <span className="pagination-btn-hasil-panen">&laquo;</span>
                    <span className="page-number-hasil-panen active">1</span>
                    <span className="page-number-hasil-panen">2</span>
                    <span className="page-number-hasil-panen">3</span>
                    <span className="pagination-btn-hasil-panen">&raquo;</span>
                </div>
            </div>
        </div>
    );
}

export default ListHasilPanen;
