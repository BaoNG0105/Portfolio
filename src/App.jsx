// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectsSection from './sections/ProjectsSection';
import AboutMeSection from './sections/AboutMeSection';
import ActivitiesSection from './sections/ActivitiesSection';
import CherryBlossom from './components/CherryBlossom'; // Import component hoa đào
import AudioPlayer from './components/AudioPlayer'; // Import component AudioPlayer
import backgroundMusic from './assets/audio/music.mp3';  // Import file nhạc 

function App() {
  return (
    <div className="App">
      <CherryBlossom /> {/* Thêm component hoa đào */}
      <AudioPlayer src={backgroundMusic} /> {/* Thêm component audio */}
      <Header />
      <main>
        <Hero />
        {/* Các section khác */}
        <AboutMeSection/>
        <ProjectsSection />
        <ActivitiesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;