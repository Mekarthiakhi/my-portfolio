import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Auto Job Apply Bot",
    category: "Automated Job Application System",
    tools: "TypeScript, Node.js, Puppeteer, Git",
    image: "/images/callhq.webp",
    link: "https://github.com/Mekarthiakhi/autoJobApply",
  },
  {
    title: "Real-Time Chat App",
    category: "Secure Bidirectional Messaging",
    tools: "Socket.io, Firebase, React.js, Node.js",
    image: "/images/bond.webp",
    link: "https://github.com/Mekarthiakhi/Chat-App",
  },

  {
    title: "Loan Management System",
    category: "Financial Dashboard & Analytics",
    tools: "React, Firebase, JavaScript, Tailwind CSS",
    image: "/images/sapphire.webp",
    link: "https://loan-app-chi-seven.vercel.app/",
  },
  {
    title: "Compliance Graph Visualizer",
    category: "Medical Compliance Relationship Mapping",
    tools: "JavaScript, D3.js, React, SVG Rendering",
    image: "/images/radix.webp",
    link: "https://github.com/Mekarthiakhi/ComplianceGraph",
  },
  {
    title: "DealScout AI Dashboard",
    category: "AI-Powered Product Deal Aggregator",
    tools: "React, Node.js, TypeScript, AI APIs",
    image: "/images/preview1.webp",
    link: "https://github.com/Mekarthiakhi/dealScout",
  },
  {
    title: "Portfolio Website",
    category: "3D Interactive Personal Portfolio",
    tools: "React, Three.js, GSAP, TypeScript",
    image: "/images/orrdr.webp",
    link: "https://github.com/Mekarthiakhi/my-portfolio",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            type="button"
            className="carousel-arrow carousel-arrow-left"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToPrev(); }}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToNext(); }}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToSlide(index); }}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
