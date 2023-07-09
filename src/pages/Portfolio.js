import styled from "styled-components";
import { useState } from "react";
import { projects, projectsEn } from "../data";
import SingleProject from "../components/SingleProject";
import SingleProjectEn from "../components/SingleProjectEn";

const allCategories = [
  ...new Set(projects.map((item) => item.category)),
  "wszystkie",
];

const websiteCategory = projects.filter(
  (item) => item.category === "strony www"
);
const allCategoriesEn = [
  ...new Set(projectsEn.map((item) => item.category)),
  "all",
];

const websiteCategoryEn = projectsEn.filter(
  (item) => item.category === "website"
);

const Portfolio = ({ language }) => {
  const [menuItems, setMenuItems] = useState(websiteCategory);
  const [categories] = useState(allCategories);
  const [activeBtn, setActiveBtn] = useState("strony www");
  const [menuItemsEn, setMenuItemsEn] = useState(websiteCategoryEn);
  const [categoriesEn] = useState(allCategoriesEn);
  const [activeBtnEn, setActiveBtnEn] = useState("website");

  const filterItems = (category) => {
    if (category === "wszystkie") {
      setMenuItems(projects);
      setActiveBtn(category);
      return;
    }
    const newItems = projects.filter((item) => item.category === category);
    setMenuItems(newItems);
    setActiveBtn(category);
  };

  const filterItemsEn = (category) => {
    if (category === "all") {
      setMenuItems(projectsEn);
      setActiveBtn(category);
      return;
    }
    const newItems = projectsEn.filter((item) => item.category === category);
    setMenuItemsEn(newItems);
    setActiveBtnEn(category);
  };
  return (
    <Wrapper id="portfolio" className="main-page">
      {language ? (
        <>
          <div className="title">
            <h1>Moje Projekty</h1>
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
            <SingleProject className="singleProject" items={menuItems} />
          </div>
        </>
      ) : (
        <>
          <div className="title">
            <h1>My Projects</h1>
            <h2>Portfolio</h2>
          </div>
          <div className="portfolioCategory">
            {categoriesEn.map((category, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filterItemsEn(category)}
                  className={activeBtnEn === category ? "activeBtn" : null}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="projects">
            <SingleProjectEn className="singleProject" items={menuItemsEn} />
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
        :hover {
          background: rgb(197, 103, 40);
        }
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
        filter: brightness(0.6);
        @media screen and (max-width: 800px) {
          filter: brightness(1);
          width: 100vw;
          position: static;
          height: 35vh;
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
          font-size: 1.6rem;
          text-transform: uppercase;
          color: #333;
          font-weight: 600;
        }
        .info {
          font-size: 1.05rem;
          line-height: 1.5;
          @media screen and (max-width: 800px) {
            margin: 3vh auto;
            font-size: 1rem;
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
            font-family: "Saira Stencil One", sans-serif;
            font-size: 0.8rem;
            font-weight: 400;
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

export default Portfolio;
