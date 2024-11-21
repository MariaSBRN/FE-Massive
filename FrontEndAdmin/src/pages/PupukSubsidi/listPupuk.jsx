// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../../components/Sidebar';
import "../../assets/css/admin.css";
import { useNavigate } from 'react-router-dom';


const ListPupuk = () => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/pupuk-subsidi-create');
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

                <div className="pupuk-subsidi">
                    <div className="search-container">
                        <input type="text" placeholder="Cari" className="search-input" />
                    </div>

                    <button className="add-button"  onClick={handleAddClick}>
                        <i className="fas fa-plus"></i> Tambah Pupuk Subsidi
                    </button>

                    <table className="pupuk-table">
                        <thead>
                            <tr>
                                <th>Nama Pupuk</th>
                                <th>Tanggal Distribusi</th>
                                <th>Jumlah Pupuk (kg)</th>
                                <th>Jenis Pupuk</th>
                                <th>Kualitas</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pupuk Urea</td>
                                <td>20/01/2024</td>
                                <td>500</td>
                                <td>Pupuk Kimia</td>
                                <td>Baik</td>
                                <td>
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <span className="pagination-btn">&laquo;</span>
                        <span className="page-number active">1</span>
                        <span className="page-number">2</span>
                        <span className="pagination-btn">&raquo;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListPupuk;
