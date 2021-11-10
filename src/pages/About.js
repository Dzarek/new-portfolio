import styled from "styled-components";

const About = () => {
  return (
    <Wrapper className="main-page">
      <div className="title">
        <h1>Curriculum Vitae</h1>
        <h2>
          {/* O <span>Mnie</span> */}
          Kim jestem?
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-transform: uppercase;
    font-family: "Saira Stencil One", sans-serif;
    h1 {
      opacity: 0.1;
      z-index: 1;
      position: relative;
      font-size: 5rem;
      width: 80vw;
      text-align: center;
    }
    h2 {
      z-index: 2;
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      letter-spacing: 5px;
      /* span {
        color: rgb(100, 2, 2);
      } */
    }
  }
`;

export default About;
