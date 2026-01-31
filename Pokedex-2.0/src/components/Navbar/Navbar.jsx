import { useState, useEffect } from "react";
import "./Navbar.css";
import HomeLogo from "../../assets/images/pokemon-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`navbar ${scroll ? "scroll" : ""}`}>
      <div className="navbar-left">
        <img src={HomeLogo} alt="logo" className="home-logo" />
      </div>
      <div className="navbar-right">
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="#home-container" className="navbar-link" onClick={closeMenu}>
            Home
          </a>
          <a
            href="#pokedex-container"
            className="navbar-link"
            onClick={closeMenu}
          >
            Pokedex
          </a>
          <a
            href="#community-container"
            className="navbar-link"
            onClick={closeMenu}
          >
            Community
          </a>
          <a
            href="#contact-container"
            className="navbar-link"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
}
