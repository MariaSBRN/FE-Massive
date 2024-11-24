// App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Beranda from "./Pages/Beranda/Beranda";
import Alattani from "./Pages/Alat Tani/Alattani"; // Import Alat Tani component
import Information from "./Pages/Informasi/Information";
import InformationDetail from "./Pages/InformasiDetail/InformationDetail";
import Harvest from "./Pages/HasilPanen/Harvest";
import Riwayat from "./Pages/Riwayat/Riwayat";
import PupukSubsidi from "./Pages/PupukSubsidi/PupukSubsidi";
import Projek from "./Pages/Projek/Projek";
import PupukGratis from "./Pages/PupukGratis/PupukGratis";
import Anggota from "./Pages/Anggota/Anggota";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Navigate to the Beranda page after login
    navigate("/beranda");
  };

  return (
    <div className="container">
      <div className="login-box">
        <h1 className="title">Selamat Datang!</h1>
        <p className="subtitle">Masukkan akun anda</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="input"
                placeholder="Password"
                required
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <button type="submit" className="button">
            Masuk
          </button>
          <div className="checkbox-wrapper">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="checkbox-label">
              Ingat Saya
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/alat-tani" element={<Alattani />} />{" "}
        <Route path="/information" element={<Information />} />{" "}
        <Route path="/informationDetail" element={<InformationDetail />} />{" "}
        <Route path="/harvest" element={<Harvest />} />{" "}
        <Route path="/riwayat" element={<Riwayat />} />{" "}
        <Route path="/pupuk-subsidi" element={<PupukSubsidi />} />{" "}
        <Route path="/projek" element={<Projek />} />{" "}
        <Route path="/pupuk-gratis" element={<PupukGratis />} />{" "}
        <Route path="/anggota" element={<Anggota />} />{" "}
        {/* New route for Alat Tani */}
      </Routes>
    </Router>
  );
};

export default App;
