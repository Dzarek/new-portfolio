import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import { ImEnter } from "react-icons/im";
import { projects } from "../data";
// import SingleProject from "../components/SingleProject";

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
      <div className="portfolioCategory">
        <button>Strony WWW</button>
        <button>Aplikacje</button>
        <button>Gry</button>
        <button>Wszystkie</button>
      </div>
      <div className="projects">
        {/* <SingleProject className="singleProject" /> */}
        {projects.map((item) => {
          const { title, img, id, info, technology, githubLink, siteLink } =
            item;
          return (
            <div data-aos="fade-down" key={id} className="singleProject">
              <img src={img} alt={title} />
              <div className="description">
                <h3 className="titlePortfolio">{title}</h3>
                <p className="info">{info}</p>
                <div className="technology">
                  {technology.map((item) => {
                    return <h4>{item}</h4>;
                  })}
                </div>
                <div className="seeProject">
                  <a href={githubLink}>
                    <FaGithub />
                  </a>
                  <a href={siteLink}>
                    <ImEnter />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 400vh;
  .portfolioCategory {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 40vw;
    margin: 30vh auto 15vh;
    button {
      padding: 10px;
      /* background: rgb(197, 103, 40); */
      background: transparent;
      color: white;
      border: 2px solid rgb(197, 103, 40);
      border-radius: 5px;
      font-size: 1rem;
      text-transform: uppercase;
      cursor: pointer;
      font-weight: 400;
      font-family: "Saira Stencil One", sans-serif;

      transition: 0.4s;
      :hover {
        background: rgb(197, 103, 40);
      }
    }
  }
  .projects {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 65vw;
    margin: 10vh auto 0;
    .singleProject {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 60%;
      height: 50vh;
      border-radius: 5px;
      margin-right: 20vw;
      margin-bottom: 15vh;
      img {
        transition: 0.5s;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 5px;
      }
      :hover img {
        filter: blur(2px);
      }
      .description {
        width: 70%;
        height: 80%;
        position: absolute;
        top: 50%;
        left: 70%;
        transform: translateY(-50%);
        background: white;
        color: rgb(197, 103, 40);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        opacity: 0.9;
        .titlePortfolio {
          font-size: 2rem;
          text-transform: uppercase;
        }
        .info {
          font-size: 1.2rem;
        }
        .technology {
          display: flex;
          justify-content: space-around;
          align-items: center;
          align-self: flex-start;
          h4 {
            background: #333;
            border-radius: 5px;
            padding: 5px 10px;
            margin: 0 5px;
            text-transform: uppercase;
          }
        }
        .seeProject {
          display: flex;
          justify-content: space-around;
          align-items: center;
          a {
            font-size: 2rem;
            color: rgb(197, 103, 40);
            margin: 0 5px;
          }
        }
      }
    }
    .singleProject:nth-of-type(even) {
      margin-right: -20vw;
      .description {
        width: 70%;
        height: 80%;
        position: absolute;
        top: 50%;
        left: -30%;
      }
    }
  }
`;

export default Offer;
