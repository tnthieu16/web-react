import React from 'react';
import './App.css';

const Navbar = () => (
  <nav>
    <span>Trung Hiếu</span>
    <span>Dự án</span>
    <span>
      Sinh Viên <br /> 22CVD1
    </span>
    <span className="nav_contact_link">Liên hệ</span>
  </nav>
);

const App = () => {
  return (
    <div className="portfolio_container">
      {/* HOME SECTION */}
      <section className="home_section">
        <Navbar />
        <span className="sub_hero_text">
          <p>Sinh viên ngành Công nghệ Vật lý Điện tử và Tin học - Khoá 2022</p>
        </span>
        <h1 className="hero_text">
          Cử nhân <br /> Khoa học
        </h1>
        <span className="scroll_btn">(Kéo xuống để biết thêm)</span>
      </section>

      {/* ABOUT SECTION */}
      <section className="about_section">
        <img src="src/assets/images/b6af46f7848f5e8d77376c1df741fe77.jpg" alt="Background" />
        <span className="about_span">Tôi là...</span>
        <div className="about_content">
          <div className="about_topic">
            <span>Về tôi</span>
            <span>Kỹ năng</span>
          </div>
          <div className="about_text">
            Tôi có kiến thức về điện tử, các ngôn ngữ lập trình C, C++, Python và MATLAB. 
            Với sức trẻ và tinh thần sẵn sàng tiếp nhận những cái mới, tôi mong muốn nhận 
            được cơ hội để thử sức và có thêm kinh nghiệm thực tế.
          </div>
        </div>
        <div className="skills">
          <span>Nghiên cứu</span>
          <span>Làm báo cáo</span>
          <span>Làm việc nhóm</span>
          <span>Tìm kiếm thông tin, tài liệu</span>
          <span>Thích nghi với môi trường mới</span>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects_section">
        <span className="project_title">Đồ án</span>
        <div className="projects_container">
          <ProjectItem title="Đa thức" imgSrc="src/assets/images/C_Logo.png" />
          <div className="project project2">
            <span>Khoá số</span>
            <img src="src/assets/images/Khoa_so.png" alt="Khoá số" />
          </div>
          <div className="project project3">
            <span>Thang máy</span>
            <img src="src/assets/images/Thang_may.png" alt="Thang máy" />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact_section">
        <span>Linked In</span>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>GitHub</span>
        <span>Liên hệ</span>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer_title">
          Trung <br /> Hiếu
        </span>
        <div className="footer_nav">
          <span>Home</span>
          <span>About</span>
          <span>Project</span>
          <span>Contact</span>
        </div>
        <div className="footer_nav">
          <span>Linked In</span>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>GitHub</span>
        </div>
      </footer>
    </div>
  );
};

const ProjectItem = ({ title, imgSrc }) => (
  <div className="project">
    <span>{title}</span>
    <img src={imgSrc} alt={title} />
  </div>
);

export default App;