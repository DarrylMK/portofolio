import "./CVContainer.css";
import { LuDownload } from "react-icons/lu";

const CVContainer = ({ setShowCV }) => {
  return (
    <div className="cv-container">
      <div className="cv-image">
        <button onClick={() => setShowCV(false)} className="cv-close-button">
          <span></span>
          <span></span>
        </button>
        <a href="../../assets/images/{fileName[fileIndex]}" download>
          <LuDownload className="icons" />
        </a>
      </div>
    </div>
  );
};

export default CVContainer;
