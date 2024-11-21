// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../../components/Sidebar';
import "../../assets/css/admin.css";

const ListPeminjaman = () => {

    return (
        <div className="content-wrapper-list-peminjaman">
            <Sidebar />
            <div className="content-list-peminjaman" id="content">
                <div className="header-list-peminjaman">
                    <i className="fas fa-bell"></i>
                    <div className="profile-list-peminjaman">
                        <i className="fas fa-user-circle"></i> Profil Saya <i className="fas fa-caret-down"></i>
                    </div>
                </div>
                
                <div className="search-container-list-peminjaman">
                    <input type="text" placeholder="Cari" className="search-input-list-peminjaman" />
                </div>

                <table className="table-list-peminjaman">
                    <thead>
                        <tr>
                            <th>Nama Peminjam</th>
                            <th>Alat Tani</th>
                            <th>Tanggal Peminjaman</th>
                            <th>Status Permohonan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Budiono Siregar</td>
                            <td>Traktor</td>
                            <td>20/08/2024</td>
                            <td>Menunggu</td>
                            <td className="btn-list-peminjaman">
                                <button className="approve-btn-list-peminjaman">✔ Terima</button>
                                <button className="reject-btn-list-peminjaman">✖ Tolak</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Budiono Siregar</td>
                            <td>Traktor</td>
                            <td>20/08/2024</td>
                            <td>Menunggu</td>
                            <td className="btn-list-peminjaman">
                                <button className="approve-btn-list-peminjaman">✔ Terima</button>
                                <button className="reject-btn-list-peminjaman">✖ Tolak</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Budiono Siregar</td>
                            <td>Traktor</td>
                            <td>20/08/2024</td>
                            <td>Menunggu</td>
                            <td className="btn-list-peminjaman">
                                <button className="approve-btn-list-peminjaman">✔ Terima</button>
                                <button className="reject-btn-list-peminjaman">✖ Tolak</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="pagination-list-peminjaman">
                    <span className="pagination-btn-list-peminjaman">&laquo;</span>
                    <span className="page-number-list-peminjaman active">1</span>
                    <span className="page-number-list-peminjaman">2</span>
                    <span className="page-number-list-peminjaman">3</span>
                    <span className="pagination-btn-list-peminjaman">&raquo;</span>
                </div>
            </div>
        </div>
    );
}

export default ListPeminjaman;
