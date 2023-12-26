import "./Project2.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project2 = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div>
      <div className="projects-container project-2">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          Suitmedia Frontend Test (Latest Project)
        </h2>
        <div
          className="project-description"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Slicing User Interface based on a design that has been provided from
          Suitmedia. This website UI was created using ReactJS.
        </div>
        <div className="project-images">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="images"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="images"
          ></div>
        </div>
        <a
          className="link-button"
          href="https://darrylmk.github.io/Suitmedia-Darryl/"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <p>Visit Website</p>
        </a>
      </div>
    </div>
  );
};

export default Project2;
