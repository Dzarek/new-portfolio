import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Wrapper className="App">
      <Navbar className="navbar" />
      <div className="appContent">
        <Home />
        <About />
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
