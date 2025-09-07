import React, { useState } from "react";
import '../styles/ActivitiesSection.css';
import act1_1 from '../assets/image/act1_1.jpg';
import act1_2 from '../assets/image/act1_2.jpg';
import act2_1 from '../assets/image/act2_1.jpg';
import act2_2 from '../assets/image/act2_2.jpg';
import act3_1 from '../assets/image/act3_1.jpg';
import act3_2 from '../assets/image/act3_2.jpg';


const myActivities = [
  {
    images: [act1_1, act1_2], // Thay thế bằng ảnh của bạn
    title: 'Brother and Sister FPTU 2023',
    description: 'Actively engaged as a Student Mentor, dedicated to helping new students acclimate to campus life, fostering a strong sense of community, and ensuring a positive start to their academic journey at FPT University.',
  },
  {
    images: [act2_1, act2_2], // Thay thế bằng ảnh của bạn
    title: 'Vietnam Study - Tour Program Summer FPTU 2023',
    description: 'Provided dedicated support to international students participating in academic and cultural exchange programs at FPT University, fostering cross-cultural understanding and enriching their overall experience.',
  },
  {
    images: [act3_1, act3_2],
    title: 'Study Overseas Program - Malaysia FPTU 2023',
    description: 'Actively participated in the Study Overseas Program in Malaysia, gaining valuable international exposure and enhancing my academic and cultural understanding through immersive experiences.',
  }
  // Thêm các hoạt động khác ở đây
];

function ActivitiesSection() {
  // State để lưu chỉ mục ảnh hiện tại cho mỗi hoạt động
  const [imageIndexes, setImageIndexes] = useState(
    myActivities.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );

  // Xử lý khi click vào ảnh của một hoạt động cụ thể
  const handleImageClick = (activityIndex) => {
    const activity = myActivities[activityIndex];
    const nextIndex = (imageIndexes[activityIndex] + 1) % activity.images.length;
    setImageIndexes({
      ...imageIndexes,
      [activityIndex]: nextIndex,
    });
  };

  return (
    <section id="activities" className="activities-section">
      <h2>My Activities</h2>
      <div className="activities-container">
        {myActivities.map((activity, index) => (
          <div className="activity-item" key={index}>
            <div className="activity-image">
              <img
                src={activity.images[imageIndexes[index]]}
                alt={activity.title}
                onClick={() => handleImageClick(index)}
              />
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