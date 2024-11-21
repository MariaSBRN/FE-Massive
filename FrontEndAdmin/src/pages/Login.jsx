// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/LoginStyle.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logika autentikasi bisa ditambahkan di sini
    navigate('/beranda'); // arahkan ke halaman dashboard atau halaman lain yang diinginkan
  };

  return (
    <div className="loginContainer">
      <div className="logo-section">
        <img src="/img/logo.png" alt="Kelompok Tani Dosroha" className="logo" />
      </div>
      <div className="divider"></div>
      <div className="login-section">
        <h1>Selamat Datang!</h1><br />
        <p>Masukkan akun anda sebagai admin</p>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="kelompoktani@gmail.com" required />
          <input type="password" placeholder="********" required />
          <button type="submit">Masuk</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
