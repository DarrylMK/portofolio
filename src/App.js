import "./App.css";
import { useEffect, useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import CVContainer from "./components/CVContainer/CVContainer";
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

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
      {/* <div style={{ height: "4.7rem" }}>Space</div> */}
      {showCV && <CVContainer setShowCV={setShowCV} />}
      <Header setShowCV={setShowCV} handleCVButton={handleCVButton} />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
