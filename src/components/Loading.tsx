import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "./context/LoadingProvider";

const Loading = () => {
  const { isLoading } = useLoading();
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setFade(true);
      const timer = setTimeout(() => setShow(false), 500); // Wait for fade out animation
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <div className={`loading-container ${fade ? "fade-out" : ""}`}>
      <div className="loading-content">
        <div className="tech-loader">
          <div className="circle-outer"></div>
          <div className="circle-inner"></div>
          <div className="circle-core"></div>
        </div>
        <p className="loading-text">
          INITIALIZING <span className="dots"><span>.</span><span>.</span><span>.</span></span>
        </p>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
