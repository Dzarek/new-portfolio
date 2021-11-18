import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import Cookie from "./components/CookiePage";
// import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Wrapper className="App">
      <Router>
        <Navbar className="navbar" />
        <div className="appContent">
          {/* <Switch> */}
          <Home />
          <About />
          <Offer />
          <Portfolio />
          <Contact />
          {/* <Route exact path="/cookie" component={Cookie} /> */}
          {/* </Switch> */}
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
