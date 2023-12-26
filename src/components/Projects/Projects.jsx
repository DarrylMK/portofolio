import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="projects-container project-1" id="projects">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        Marketplace Website Project
      </h2>
      <div
        className="project-description"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        College project to create a website with a "marketplace" theme using
        HTML, CSS, and JavaScript. This website creation also uses frameworks
        and libraries such as Bootstrap, NodeJS and MongoDB as the database.
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
    </div>
  );
};

export default Projects;
