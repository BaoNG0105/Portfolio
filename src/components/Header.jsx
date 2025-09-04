import React from "react";
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <a href="/">portfolio.</a>
      </div>
      {/* Navigation Links */}
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;