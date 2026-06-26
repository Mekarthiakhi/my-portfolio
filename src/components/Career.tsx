import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Medicover Hospitals · Hyderabad</h5>
              </div>
              <h3>Jan 2024 – Present</h3>
            </div>
            <p>
              Building and maintaining production-grade hospital management systems serving thousands of patients daily.
              Developed automated billing modules reducing manual processing effort by ~40%. Optimized complex SQL queries achieving ~30% database 
              performance improvement. Led migration from legacy monolithic to modern React.js + Node.js architecture. Designed real-time push notification 
              system using Firebase FCM and secure OTP-based authentication for patient workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Chandigarh University</h5>
              </div>
              <h3>2019–2023</h3>
            </div>
            <p>
              GPA: 7.3/10. Completed comprehensive computer science curriculum with focus on data structures, algorithms, 
              system design, and software engineering principles. Developed strong foundation in full-stack development and 
              problem-solving through competitive programming and project work.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Skills & Strengths</h4>
                <h5>Technologies & Expertise</h5>
              </div>
              <h3>Full Stack</h3>
            </div>
            <p>
              Frontend: React.js, HTML5, CSS3, JavaScript, TypeScript, Redux. Backend: Node.js, Express.js, PHP, REST APIs, WebSockets. 
              Database: MySQL, Firebase, MongoDB, Query Optimization, Indexing. Tools: Git, Vite, Docker, Redis, Socket.io. 
              Strengths: Scalable System Design, Real-Time Systems, Performance Optimization, Database Architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
