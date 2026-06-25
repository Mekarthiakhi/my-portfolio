import { MdArrowOutward } from "react-icons/md";
import "./styles/WorkImage.css";

interface WorkImageProps {
  image: string;
  alt: string;
  link: string;
}

const WorkImage = ({ image, alt, link }: WorkImageProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="work-image-link"
      data-cursor="disable"
    >
      <div className="work-image-container">
        <img src={image} alt={alt} className="work-image" />
        <div className="work-image-overlay">
          <MdArrowOutward />
        </div>
      </div>
    </a>
  );
};

export default WorkImage;
