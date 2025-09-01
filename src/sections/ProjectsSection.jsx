import React from "react";
import ProjectCard from '../components/ProjectCard';
import '../styles/ProjectsSection.css';
import skinneImage from '../assets/image/skinne.png'; // Import ảnh của bạn

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
      title: 'Trang quản lý công việc',
      description: 'Ứng dụng giúp quản lý công việc hàng ngày, sử dụng React Hooks và Local Storage.',
      imageUrl: 'https://via.placeholder.com/400x250',
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/your-username/project-2',
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