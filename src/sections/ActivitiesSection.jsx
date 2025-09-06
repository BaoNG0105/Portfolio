import React from "react";
import '../styles/ActivitiesSection.css';
import act1 from '../assets/image/act1.jpg';
import act2 from '../assets/image/act2.jpg';

const myActivities = [
    {
        image: act1, // Thay thế bằng ảnh của bạn
        title: 'Brother and Sister FPTU 2023',
        description: 'Actively engaged as a Student Mentor, dedicated to helping new students acclimate to campus life, fostering a strong sense of community, and ensuring a positive start to their academic journey at FPT University.',
    },
    {
        image: act2, // Thay thế bằng ảnh của bạn
        title: 'Vietnam Study - Tour Program Summer FPTU 2023',
        description: 'Provided dedicated support to international students participating in academic and cultural exchange programs at FPT University, fostering cross-cultural understanding and enriching their overall experience.',
    },
    // Thêm các hoạt động khác ở đây
];

function ActivitiesSection() {
  return (
    <section id="activities" className="activities-section">
      <h2>My Activities</h2>
      <div className="activities-container">
        {myActivities.map((activity, index) => (
          <div className="activity-item" key={index}>
            <div className="activity-image">
              <img src={activity.image} alt={activity.title} />
            </div>
            <div className="activity-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  
  export default ActivitiesSection;