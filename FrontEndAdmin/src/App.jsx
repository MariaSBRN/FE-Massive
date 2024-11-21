/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CreateAlatTani from './pages/alatTani/createAlatTani';
import Login from './pages/Login';
import ListProyekTani from './pages/ProjectTani/listProyekTani';
import ListAnggota from './pages/AnggotaPokTan/listAnggota';
import ListPupuk from './pages/PupukSubsidi/listPupuk';
import ListAlatTani from './pages/alatTani/listAlatTani';
import Beranda from './pages/Beranda';
import CreatePupukSubsidi from './pages/PupukSubsidi/createPupukSubsidi';
import CreateAnggota from './pages/AnggotaPokTan/createAnggota';
import ListPeminjaman from './pages/alatTani/pinjamAlatTani';
import ListHasilPanen from './pages/HasilPanen/ListPanen';
// import axios from "axios";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/beranda" element={<Beranda />} />

        <Route path="/alat-tani-create" element={<CreateAlatTani />} />
        <Route path="/alat-tani-list" element={<ListAlatTani />} />
        <Route path="/alat-tani-pinjam" element={<ListPeminjaman />} />


        <Route path="/proyek-tani" element={<ListProyekTani />} />

        <Route path="/anggota-kelompok-tani" element={<ListAnggota />} />
        <Route path="/anggota-kelompok-tani-create" element={<CreateAnggota />} />

        <Route path="/pupuk-subsidi" element={<ListPupuk />} />
        <Route path="/pupuk-subsidi-create" element={<CreatePupukSubsidi />} />

        <Route path="/hasil-panen-list" element={<ListHasilPanen />} />
      </Routes>
    </Router>
  );
}

export default App;
