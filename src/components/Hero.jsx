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
        <div className="hero-subtitle">
          <h2>I'm a</h2>
          <div className="words-container">
            <div className="words">
              <span className="word">BrSE</span>
              <span className="word">Frontend Developer</span>
              <span className="word">UI/UX Designer</span>
              <span className="word">Photographer</span>
              <span className="word">Traveler</span>
              <span className="word">BrSE</span> {/* Duplicate first item for smooth loop */}
            </div>
          </div>
        </div>
        <p>I love technology and I enjoy turning my passion into real projects. Welcome to my portfolio!</p>
        <div className="social-links">
          <a href="https://www.facebook.com/gia.bao.010504"><FaFacebookF /></a>
          <a href="https://www.instagram.com/_akiraa0105_/"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@akiraa01052004"><FaTiktok /></a>
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