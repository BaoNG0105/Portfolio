// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectsSection from './sections/ProjectsSection';
import CherryBlossom from './components/CherryBlossom'; // Import component hoa đào
// import './styles/App.css'; // File CSS tổng thể

function App() {
  return (
    <div className="App">
      <CherryBlossom /> {/* Thêm component hoa đào */}
      <Header />
      {/* Thêm các section như About, Contact ở đây */}
      <main>
        <Hero />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;