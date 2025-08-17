import React from "react";
import ProjectCard from '../components/ProjectCard';
import '../styles/ProjectsSection.css';

// Dữ liệu dự án, bạn có thể tách ra file JSON riêng để dễ quản lý
const myProjects = [
    {
      title: 'Dự án E-commerce',
      description: 'Xây dựng giao diện cho một trang thương mại điện tử bằng React và Redux.',
      imageUrl: 'https://via.placeholder.com/400x250', // Thay bằng ảnh dự án của bạn
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/your-username/project-1',
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
        <h2>Các dự án của tôi</h2>
        <div className="projects-grid">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    );
  }
  
  export default ProjectsSection;