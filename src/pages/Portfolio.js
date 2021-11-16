import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="portfolio" className="main-page">
      <div className="title">
        <h1>Moje Projekty</h1>
        <h2>Portfolio</h2>
      </div>
      <div data-aos="fade-down" className="offerContent"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  .offerContent {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 70vw;
    margin: 30vh auto 0;
  }
`;

export default Offer;
