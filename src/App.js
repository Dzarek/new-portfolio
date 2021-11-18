import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Wrapper className="App">
      <Router>
        <Navbar className="navbar" />
        <div className="appContent">
          <Home />
          <About />
          <Offer />
          <Portfolio />
          <Contact />
          {/* <Routes> */}
          {/* <Route path="/" element={<Home />} />
            <Route path="/" element={<About />} />
            <Route path="/" element={<Offer />} />
            <Route path="/" element={<Portfolio />} />
            <Route path="/" element={<Contact />} /> */}
          {/* <Route path="/cookie" element={<Cookie />} /> */}
          {/* </Routes> */}
        </div>
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
