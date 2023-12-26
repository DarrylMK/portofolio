import "./App.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CVContainer from "./components/CVContainer/CVContainer";
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Project2 from "./components/Project2/Project2";

function App() {
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    alert("Use PC/Laptop recommended");
    Aos.init();
  }, []);

  const handleCVButton = (index) => {
    // setFileIndex(index);
    setShowCV(true);
    console.log(showCV);
  };

  return (
    <>
      <NavigationBar />
      {showCV && <CVContainer setShowCV={setShowCV} />}
      <Header setShowCV={setShowCV} handleCVButton={handleCVButton} />
      <Projects
        title="Marketplace Website Project"
        description='College project to create a website with a "marketplace" theme using
        HTML, CSS, and JavaScript. This website creation also uses frameworks
        and libraries such as Bootstrap, NodeJS and MongoDB as the database'
      />
      <Project2 />
      <Footer />
    </>
  );
}

export default App;
