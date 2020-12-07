import React from "react";

import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  React.useEffect(() => {
    alert("This Project is not complete yet");
  }, []);
  return (
    <>
      <Home />
      {/* <Container> */}
      <Navigation />
      <About />
      <Projects />
      <Contact />
      {/* </Container> */}
      <Footer />
    </>
  );
}

export default App;
