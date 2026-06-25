import "./styles/Loading.css";
import { useLoading } from "./context/LoadingProvider";

const Loading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p>Loading Experience...</p>
      </div>
    </div>
  );
};

export default Loading;
