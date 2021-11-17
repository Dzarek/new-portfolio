import { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="contact" className="main-page">
      <div className="title">
        <h1>Napisz do mnie</h1>
        <h2>Kontakt</h2>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 100vh;
`;
export default Contact;
