import Button from "../Button/Button";
import "./Header.css";

const Header = ({ setShowCV, handleCVButton }) => {
  return (
    <div className="container" id="home">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,154.7C672,128,768,128,864,154.7C960,181,1056,235,1152,266.7C1248,299,1344,309,1392,314.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="profile-container">
        <div className="profile">
          <h1>
            Hi, I am <span>Darryl Matthew Kurniawan</span>
          </h1>
          <div className="description">
            Tarumanagara University student majoring in Informatics Engineering
            and interested in becoming a Front-end Developer
          </div>
          <div className="button-list">
            <Button
              handleClick={handleCVButton}
              text="Show CV"
              color="#16F4D0"
            />
            {/* <Button
              handleClick={handleCVButton}
              text="Show CV ATS"
              color="#fff"
            /> */}
          </div>
        </div>
        <div className="profile-image-container">
          <div className="profile-image"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
