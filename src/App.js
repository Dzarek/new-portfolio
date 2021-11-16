import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Wrapper className="App">
      <Navbar className="navbar" />
      <div className="appContent">
        <Router>
          <Home />
          <About />
          <Offer />
          <Portfolio />
        </Router>
      </div>
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
