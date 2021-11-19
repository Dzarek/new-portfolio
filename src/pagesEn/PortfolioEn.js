import styled from "styled-components";
import { useState } from "react";
import { projectsEn } from "../data";
import SingleProjectEn from "../components/SingleProject";

const allCategories = [
  ...new Set(projectsEn.map((item) => item.category)),
  "all",
];

const websiteCategory = projectsEn.filter(
  (item) => item.category === "website"
);

const PortfolioEn = () => {
  const [menuItems, setMenuItems] = useState(websiteCategory);
  const [categories] = useState(allCategories);
  const [activeBtn, setActiveBtn] = useState("website");

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projectsEn);
      setActiveBtn(category);
      return;
    }
    const newItems = projectsEn.filter((item) => item.category === category);
    setMenuItems(newItems);
    setActiveBtn(category);
  };
  return (
    <Wrapper id="portfolio" className="main-page">
      <div className="title">
        <h1>My Projects</h1>
        <h2>Portfolio</h2>
      </div>
      <div className="portfolioCategory">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => filterItems(category)}
              className={activeBtn === category ? "activeBtn" : null}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="projects">
        <SingleProjectEn className="singleProject" items={menuItems} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;

  .portfolioCategory {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 40vw;
    margin: 30vh auto 15vh;
    button {
      padding: 10px;
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
        background: #333;
      }
    }
    .activeBtn {
      background: rgb(197, 103, 40);
    }
    @media screen and (max-width: 800px) {
      width: 95vw;
      button {
        width: 40%;
        font-size: 0.9rem;
        margin: 2vh auto;
        padding: 10px 5px;
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
    @media screen and (max-width: 800px) {
      width: 100vw;
      margin-bottom: -20vh;
    }
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
      @media screen and (max-width: 800px) {
        width: 95vw;
        margin-right: 0vw;
        height: auto;
      }
      img {
        transition: 0.5s;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 5px;
        filter: brightness(0.3);
        @media screen and (max-width: 800px) {
          filter: brightness(1);
          width: 100vw;
          position: static;
          height: 40vh;
          border-radius: 5px 5px 0 0;
        }
      }
      :hover img {
        filter: brightness(1);
        box-shadow: 0 0 3px 1px white;
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
        box-shadow: 0 0 3px 1px black;
        @media screen and (max-width: 800px) {
          position: static;
          width: 100vw;
          height: auto;
          transform: translateY(0);
          border-radius: 0 0 5px 5px;
        }
        .titlePortfolio {
          font-size: 2rem;
          text-transform: uppercase;
          color: #333;
        }
        .info {
          font-size: 1.2rem;
          @media screen and (max-width: 800px) {
            margin: 3vh auto;
          }
        }
        .technology {
          display: flex;
          justify-content: space-around;
          align-items: center;
          align-self: flex-start;
          margin-bottom: 10%;
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
          position: absolute;
          right: 10%;
          bottom: 10%;
          a {
            font-size: 2rem;
            color: rgb(197, 103, 40);
            margin: 0 10px;
            transition: 0.3s;
            :hover {
              color: #333;
            }
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
      @media screen and (max-width: 800px) {
        margin-right: 0;
        .description {
          position: static;
          width: 100vw;
          height: auto;
          transform: translateY(0);
        }
      }
    }
  }
`;

export default PortfolioEn;
