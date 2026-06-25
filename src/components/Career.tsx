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
                <h4>Full Stack Developer</h4>
                <h5>Current Role</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building innovative web applications with modern tech stack.
              Specializing in full-stack development, system design, and
              creating scalable solutions for complex problems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Developer</h4>
                <h5>5+ years · Remote</h5>
              </div>
              <h3>2021–24</h3>
            </div>
            <p>
              Led development of multiple projects. Expertise in React, Node.js,
              and database design. Mentored junior developers and contributed to
              architectural decisions for scalable systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Tech Startup</h5>
              </div>
              <h3>2019–21</h3>
            </div>
            <p>
              Developed responsive web applications using modern frameworks.
              Worked on performance optimization and user experience improvements.
              Collaborated with product and design teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Developer</h4>
                <h5>Web Agency</h5>
              </div>
              <h3>2018-19</h3>
            </div>
            <p>
              Started career in web development. Built static and dynamic websites.
              Learned best practices and gained expertise in HTML, CSS, and
              JavaScript fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
