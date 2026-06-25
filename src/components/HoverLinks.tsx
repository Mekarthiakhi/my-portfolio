import { useEffect, useRef } from "react";
import "./styles/HoverLinks.css";

const HoverLinks = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      element.classList.add("hoverlinks-active");
    };

    const handleMouseLeave = () => {
      element.classList.remove("hoverlinks-active");
    };

    const parent = element.closest("a");
    if (parent) {
      parent.addEventListener("mouseenter", handleMouseEnter);
      parent.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        parent.removeEventListener("mouseenter", handleMouseEnter);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="hoverlinks" ref={containerRef}>
      <div className="hoverlinks-text">{text}</div>
      <div className="hoverlinks-text hoverlinks-text-hover">{text}</div>
    </div>
  );
};

export default HoverLinks;
