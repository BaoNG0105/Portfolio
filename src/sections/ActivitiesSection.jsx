import React from "react";
import '../styles/ActivitiesSection.css';

const myActivities = [
    {
        image: 'https://via.placeholder.com/200x150', // Thay thế bằng ảnh của bạn, ví dụ: biztechImg
        title: 'FPT Edu Biztech 2024',
        description: 'Tham gia với tư cách là thí sinh trong cuộc thi kinh doanh công nghệ FPT Edu Biztech 2024, nơi chúng tôi đã phát triển và trình bày một dự án sáng tạo.',
    },
    {
        image: 'https://via.placeholder.com/200x150', // Thay thế bằng ảnh của bạn
        title: 'Tình nguyện viên Mùa Hè Xanh',
        description: 'Tham gia chiến dịch Mùa Hè Xanh, góp phần vào các hoạt động cộng đồng và hỗ trợ các khu vực khó khăn.',
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