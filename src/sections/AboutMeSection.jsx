import React from "react";
import '../styles/AboutMeSection.css';
import about from '../assets/image/about.jpg';

function AboutMeSection() {
    return (
      <section id="about" className="about-me-section">
        <h2>About Me</h2>
        <div className="about-me-content">
          <div className="about-me-image">
            <img src={about} alt="Ngo Gia Bao" />
          </div>
          <div className="about-me-text">
            <h3>Hello! I'm Ngo Gia Bao</h3>
            <p>
              I am a passionate and dedicated student at FPT University, majoring in Software Engineering. My journey in the world of technology is driven by a curiosity to learn and a desire to create meaningful and efficient solutions.
            </p>
            <p>
              With a strong foundation in frontend development and a keen eye for UI/UX design, I enjoy turning complex problems into beautiful, intuitive, and user-friendly interfaces. I'm always exploring new technologies to enhance my skills and build better digital experiences.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default AboutMeSection;