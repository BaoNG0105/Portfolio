import React, { useState } from "react";
import '../styles/Header.css'
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Function to handle navigation links
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  // Function to handle Home link separately
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };
  
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <a href="/">portfolio.</a>
      </div>
      {/* Navigation Links */}
      <nav className="nav">
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="/" onClick={handleHomeClick}>Home</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#activities" onClick={handleNavClick}>Activities</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;