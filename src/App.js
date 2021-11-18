import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import HomeEn from "./pagesEn/HomeEn";
import AboutEn from "./pagesEn/AboutEn";
import OfferEn from "./pagesEn/OfferEn";
import PortfolioEn from "./pagesEn/PortfolioEn";
import ContactEn from "./pagesEn/ContactEn";

function App() {
  const [language, setLanguage] = useState("polish");
  return (
    <Wrapper className="App">
      <Router>
        <Navbar
          className="navbar"
          setLanguage={setLanguage}
          language={language}
        />
        {language === "polish" ? (
          <div className="appContent">
            <Home />
            <About />
            <Offer />
            <Portfolio />
            <Contact />
          </div>
        ) : (
          <div className="appContent">
            <HomeEn />
            <AboutEn />
            <OfferEn />
            <PortfolioEn />
            <ContactEn />
          </div>
        )}
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .appContent {
    width: 80vw;
    margin-left: 20vw;
  }
`;

export default App;
