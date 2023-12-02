import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="footer-container">
      <div className="footer-image" data-aos="fade-up"></div>
    </div>
  );
};

export default Footer;
