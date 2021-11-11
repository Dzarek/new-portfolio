import styled from "styled-components";
import headerVideo from "../images/headerVideo.mp4";
import headerImg from "../images/headerImg.png";

const Home = () => {
  return (
    <Wrapper>
      <header className="headerContainer">
        <video
          src={headerVideo}
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
        ></video>
        <div className="headerInfo">
          <img src={headerImg} alt="me" />
          <div className="info">
            <h2>WITAJ !</h2>
            <h2>Jestem Jarosław Janas</h2>
            <h4>Front-End Developer</h4>
            <button className="hireBtn">zatrudni mnie</button>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  min-height: 100vh;
  position: relative;
  .headerContainer {
    width: 100%;
    height: 100vh;
    video {
      width: 100vw;
      height: 100vh;
      object-fit: fill;
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
    }
    .headerInfo {
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.6);
      img {
        height: 90vh;
        position: absolute;
        bottom: 0;
        left: 150%;
        transform: translateX(-50%);
        opacity: 0.4;
        animation: imgMove 2s forwards;
        @keyframes imgMove {
          100% {
            left: 65%;
          }
        }
      }
      .info {
        color: white;
        position: absolute;
        top: 20vh;
        left: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-family: "Mirza", sans-serif;
        h2 {
          font-size: 3rem;
        }
        h4 {
          font-size: 2rem;
          margin-top: 3vh;
        }
        .hireBtn {
          margin: 15vh auto 0;
          padding: 1vw 1.5vw;
          text-transform: uppercase;
          font-family: "Mirza", sans-serif;
          font-size: 1.3rem;
          border-radius: 10px;
          border: 1px solid white;
          background: none;
          color: white;
          transition: 0.3s;
          cursor: pointer;
          :hover {
            background: white;
            color: black;
          }
        }
      }
    }
  }
`;

export default Home;
