import React from "react";
import { Container } from "@material-ui/core";

import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Home />
      <Container>
        <Navigation />
        <About />
        <Portfolio />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
