import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import NavbarEn from "./components/NavbarEn";

import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// import HomeEn from "./pagesEn/HomeEn";
// import AboutEn from "./pagesEn/AboutEn";
// import OfferEn from "./pagesEn/OfferEn";
// import PortfolioEn from "./pagesEn/PortfolioEn";
// import ContactEn from "./pagesEn/ContactEn";

function App() {
  const [language, setLanguage] = useState(true);
  return (
    <Wrapper className="App">
      <Router>
        {language ? (
          <Navbar className="navbar" setLanguage={setLanguage} />
        ) : (
          <NavbarEn className="navbar" setLanguage={setLanguage} />
        )}
        {/* {language === "polish" ? ( */}
        <div className="appContent">
          <Home language={language} />
          <About language={language} />
          <Offer language={language} />
          <Portfolio language={language} />
          <Contact language={language} />
        </div>
        {/* ) : (
          <div className="appContent">
            <HomeEn />
            <AboutEn language={language} />
            <OfferEn />
            <PortfolioEn />
            <ContactEn />
          </div>
        )} */}
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .appContent {
    width: 80vw;
    margin-left: 20vw;
    @media screen and (max-width: 800px) {
      width: 100vw;
      margin-left: 0;
    }
  }
`;

export default App;
