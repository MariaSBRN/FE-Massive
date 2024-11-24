import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const location = useLocation(); // Untuk mendapatkan URL saat ini
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk burger menu

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? `${styles.navLink} ${styles.activeLink}`
      : styles.navLink;
  };

  const getDropdownItemClass = (submenu) => {
    return submenu === selectedSubmenu
      ? `${styles.dropdownItem} ${styles.activeDropdownItem}`
      : styles.dropdownItem;
  };

  useEffect(() => {
    const path = location.pathname;

    if (path === "/Information") setSelectedSubmenu("Information");
    else if (path === "/harvest") setSelectedSubmenu("harvest");
    else if (path === "/pupuk-subsidi") setSelectedSubmenu("pupuk-subsidi");
    else if (path === "/pupuk-gratis") setSelectedSubmenu("pupuk-gratis");
    else if (path === "/riwayat") setSelectedSubmenu("riwayat");
    else setSelectedSubmenu(null);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle burger menu
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="Company Logo" className={styles.logo} />
      <div className={styles.burgerButton} onClick={toggleMenu}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>
      <nav className={`${styles.navigation} ${isMenuOpen ? styles.show : ""}`}>
        <Link to="/beranda" className={getNavLinkClass("/beranda")}>
          Beranda
        </Link>
        <Link to="/alat-tani" className={getNavLinkClass("/alat-tani")}>
          Alat Tani
        </Link>
        <div className={styles.dropdownContainer}>
          <a href="#" className={styles.navLink}>
            Informasi
          </a>
          <FontAwesomeIcon icon={faCaretDown} className={styles.dropdownIcon} />
          <div className={styles.dropdownMenu}>
            <Link
              to="/Information"
              className={getDropdownItemClass("Information")}
              onClick={() => setSelectedSubmenu("Information")}
            >
              Edukasi
            </Link>
            <Link
              to="/harvest"
              className={getDropdownItemClass("harvest")}
              onClick={() => setSelectedSubmenu("harvest")}
            >
              Hasil Panen
            </Link>
          </div>
        </div>
        <div className={styles.dropdownContainer}>
          <a href="#" className={styles.navLink}>
            Pupuk
          </a>
          <FontAwesomeIcon icon={faCaretDown} className={styles.dropdownIcon} />
          <div className={styles.dropdownMenu}>
            <Link
              to="/pupuk-subsidi"
              className={getDropdownItemClass("pupuk-subsidi")}
              onClick={() => setSelectedSubmenu("pupuk-subsidi")}
            >
              Pupuk Subsidi
            </Link>
            <Link
              to="/pupuk-gratis"
              className={getDropdownItemClass("pupuk-gratis")}
              onClick={() => setSelectedSubmenu("pupuk-gratis")}
            >
              Pupuk Gratis
            </Link>
          </div>
        </div>
        <Link to="/projek" className={getNavLinkClass("/projek")}>
          Projek
        </Link>
        <Link to="/anggota" className={getNavLinkClass("/anggota")}>
          Anggota
        </Link>
        <div className={styles.profileContainer}>
          <FontAwesomeIcon icon={faUser} className={styles.profileIcon} />
          <div className={styles.profileDropdown}>
            <Link
              to="/riwayat"
              className={getDropdownItemClass("riwayat")}
              onClick={() => setSelectedSubmenu("riwayat")} // Tambahkan ini
            >
              Riwayat
            </Link>
            <Link to="/" className={styles.profileItem}>
              Keluar
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
