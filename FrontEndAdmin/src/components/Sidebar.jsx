// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="logo">
        <img src="/img/logo.png" alt="Kelompok Tani Dosroha" className="logo" />
      </div>
      <ul className="menu">
        <li>
          <NavLink to="/beranda" activeClassName="active">
            <i className="fas fa-th-large"></i> Beranda
          </NavLink>
        </li>
        <li>
          <NavLink to="/alat-tani-list" activeClassName="active">
            <i className="fas fa-tools"></i> Alat Tani
          </NavLink>
        </li>
        <li>
          <NavLink to="/alat-tani-pinjam" activeClassName="active">
            <i className="fas fa-handshake"></i> Peminjaman Alat Tani
          </NavLink>
        </li>
        <li>
          <NavLink to="/pupuk-subsidi" activeClassName="active">
            <i className="fas fa-seedling"></i> Pupuk Subsidi
          </NavLink>
        </li>
        <li>
          <NavLink to="/hasil-panen-list" activeClassName="active">
            <i className="fas fa-chart-bar"></i> Hasil Panen
          </NavLink>
        </li>
        <li>
          <NavLink to="/anggota-kelompok-tani" activeClassName="active">
            <i className="fas fa-users"></i> Anggota Kelompok Tani
          </NavLink>
        </li>
        <li>
          <NavLink to="/proyek-tani" activeClassName="active">
            <i className="fas fa-project-diagram"></i> Projek Tani
          </NavLink>
        </li>
        <li>
          <NavLink to="/bibit-tani" activeClassName="active">
            <i className="fas fa-leaf"></i> Bibit Tani
          </NavLink>
        </li>
        <li>
          <NavLink to="/berita" activeClassName="active">
            <i className="fas fa-newspaper"></i> Berita
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
