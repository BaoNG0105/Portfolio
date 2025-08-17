import React from "react";
import '../styles/Hero.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaGithub } from "react-icons/fa";
import avatar from '../assets/image/avatar.png'; // Thêm ảnh của bạn vào src/assets/
import bgImage from '../assets/image/background.png'; // Import your background image


function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Phần giới thiệu với ảnh nền */}
      <div className="hero-text">
        <h2>こんにちは!</h2>
        <h1>Ngo Gia Bao</h1>
        <h2>I'm a <span className="highlight">Frontend Developer</span></h2>
        <p>A student of FPT University.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/gia.bao.010504"><FaFacebookF /></a>
          <a href="https://www.instagram.com/_akiraa0105_/"><FaInstagram /></a>
          <a href="#"><FaTiktok /></a>
          <a href="https://www.youtube.com/@akiraa0105"><FaYoutube /></a>
          <a href="https://github.com/BaoNG0105"><FaGithub /></a>
        </div>
        <div className="cta-container">
        <a href="#projects" className="cta-button">Download CV</a>
        </div>
      </div>
      {/* Thêm ảnh đại diện của bạn */}
      <div className="hero-image">
        <img src={avatar} alt="Avatar" />
      </div>
    </section>
  );
}

export default Hero;