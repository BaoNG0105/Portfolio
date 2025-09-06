import React, { useState } from "react";
import '../styles/AboutMeSection.css';
import about1 from '../assets/image/about1.jpg';
import about2 from '../assets/image/about2.jpg';
import about3 from '../assets/image/about3.jpg';

const aboutImages = [about1, about2, about3];

function AboutMeSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    const nextIndex = (currentImageIndex + 1) % aboutImages.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <section id="about" className="about-me-section">
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="about-me-image">
          <img
            src={aboutImages[currentImageIndex]}
            alt="Ngo Gia Bao"
            onClick={handleImageClick}
          />
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