import React from "react";
import '../styles/ActivitiesSection.css';
import act1 from '../assets/image/act1.jpg';
import act2 from '../assets/image/act2.jpg';

const myActivities = [
    {
        image: act1, // Thay thế bằng ảnh của bạn
        title: 'Brother and Sister FPTU 2023',
        description: 'Tham gia với tư cách là một Brother hỗ trợ các em sinh viên mới trong việc hòa nhập môi trường mới ở Đại Học FPT.',
    },
    {
        image: act2, // Thay thế bằng ảnh của bạn
        title: 'Vietnam Study - Tour Program Summer FPTU 2023',
        description: 'Hỗ trợ các bạn sinh viên quốc tế trong chương trình giao lưu văn hóa và học tập tại Đại Học FPT.',
    },
    // Thêm các hoạt động khác ở đây
];

function ActivitiesSection() {
    return (
      <section id="activities" className="activities-section">
        <h2>My Activities</h2>
        <div className="activities-container">
          {/* Cột bên trái cho hình ảnh */}
          <div className="activities-images-column">
            {myActivities.map((activity, index) => (
              <div className="activity-image" key={`img-${index}`}>
                <img src={activity.image} alt={activity.title} />
              </div>
            ))}
          </div>
  
          {/* Cột bên phải cho nội dung */}
          <div className="activities-content-column">
            {myActivities.map((activity, index) => (
              <div className="activity-content-item" key={`content-${index}`}>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default ActivitiesSection;