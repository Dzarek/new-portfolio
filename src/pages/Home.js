import React from "react";
import styled from "styled-components";
import headerVideo from "../images/headerVideo.mp4";
import headerImg from "../images/headerImg.png";
import { Link } from "react-scroll";
import beforeVideoJJ from "../images/beforeVideoJJ.jpg";

const Home = ({ language }) => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <Wrapper id="home">
      <header className="headerContainer">
        <img
          src={beforeVideoJJ}
          className="video-thumb"
          alt="thumb"
          style={{ opacity: isVideoLoaded ? 0 : 1 }}
        />
        <video
          src={headerVideo}
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
          onLoadedData={onLoadedData}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        ></video>
        <div className="headerInfo">
          <img src={headerImg} alt="me" />
          <div className="info">
            <h2>{language ? "WITAJ !" : "Hello !"}</h2>
            <h1>{language ? `Jestem Jarosław Janas` : `I'm Jarosław Janas`}</h1>
            <h1 className="subtitle">Front-End Developer</h1>
            <Link
              className="hireBtn"
              to="contact"
              smooth={true}
              duration={1000}
            >
              {language ? `zatrudnij mnie` : `hire me`}
            </Link>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  min-height: 100vh;
  min-height: 100dvh;
  position: relative;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
  .headerContainer {
    width: 100%;
    height: 100vh;
    height: 100dvh;
    video,
    .video-thumb {
      width: 100vw;
      height: 100vh;
      height: 100dvh;
      object-fit: fill;
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      filter: brightness(0.4);
    }
    .headerInfo {
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      /* background: rgba(0, 0, 0, 0.5); */
      img {
        height: 90vh;
        height: 90dvh;
        position: absolute;
        bottom: -2%;
        /* left: 150%; */
        left: 65%;
        transform: translateX(-50%);
        /* opacity: 0.6; */
        opacity: 0;
        animation: imgMove 5s forwards;
        filter: brightness(0.8) saturate(0.8);
        transform: translateX(-50%) rotate(-3deg);
        @keyframes imgMove {
          100% {
            left: 65%;
            opacity: 0.7;
          }
        }
        @media screen and (max-width: 800px) {
          height: 70vh;
          height: 70dvh;
          left: 50%;
          @keyframes imgMove {
            100% {
              left: 50%;
              opacity: 0.7;
            }
          }
        }
      }
      .info {
        color: white;
        position: absolute;
        top: 20vh;
        top: 20dvh;
        left: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-family: "Changa", serif;
        h2,
        h1 {
          font-size: 2.5rem;
          font-weight: 600;
        }
        .subtitle {
          font-size: 2rem;
          margin-top: 3vh;
        }
        @media screen and (max-width: 800px) {
          width: 90%;
          margin: 0 auto;
          align-items: center;
          text-align: center;
          left: 50%;
          transform: translateX(-50%);
          top: 10vh;
          h2 {
            font-size: 1.5rem;
          }
          h1 {
            font-size: 2rem;
            line-height: 1.5;
          }
          .subtitle {
            font-size: 1.5rem;
            margin-top: 3vh;
          }
          h4 {
            font-size: 1.3rem;
            margin-top: 3vh;
          }
        }

        .hireBtn {
          margin: 15vh auto 0;
          padding: 1vw 1.5vw;
          text-transform: uppercase;
          font-family: "Saira Stencil One", sans-serif;
          font-size: 1.3rem;
          border-radius: 10px;
          border: 1px solid white;
          background: none;
          color: white;
          transition: 0.3s;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          @media screen and (max-width: 800px) {
            margin: 45vh auto 0;
            padding: 10px 20px;
            font-size: 1rem;
            background: rgba(0, 0, 0, 0.3);
          }
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
