import React from "react";
import ProjectCard from '../components/ProjectCard';
import '../styles/ProjectsSection.css';
import skinneImage from '../assets/image/skinne.png'; // Import ảnh dự án SKINNE
import fcine from '../assets/image/fcine.jpg'; // Import ảnh dự án FCINE

// Dữ liệu dự án, bạn có thể tách ra file JSON riêng để dễ quản lý
const myProjects = [
    {
      title: 'SKINNE - The Skincare Products Sales System',
      description: 'A website designed to manage and sell skin care products.',
      imageUrl: skinneImage, // Thay bằng ảnh dự án của bạn
      liveUrl: 'https://skincare-products-sales-system-omega.vercel.app/',
      sourceUrl: 'https://github.com/BaoNG0105/SkincareProductsSalesSystem',
    },
    {
      title: 'FCINE - Movie Booking Website',
      description: 'A movie booking website with user authentication and admin panel.',
      imageUrl: fcine, // Thay bằng ảnh dự án của bạn
      liveUrl: 'https://example.com',
      sourceUrl: 'https://git.fa.edu.vn/hcm25_cpl_js_java_01/group_01/movieproject_gr1',
    },
  ];

  function ProjectsSection() {
    return (
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    );
  }
  
  export default ProjectsSection;