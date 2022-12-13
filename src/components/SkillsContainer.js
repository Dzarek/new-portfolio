import cssIcon from "../images/skillIcons/css.png";
import htmlIcon from "../images/skillIcons/html.png";
import jsIcon from "../images/skillIcons/js.png";
import nextjsIcon from "../images/skillIcons/nextJS.png";
import reactIcon from "../images/skillIcons/react.png";
import reduxIcon from "../images/skillIcons/redux.png";
import reactRouterIcon from "../images/skillIcons/reactRouter.png";
import styleComponentsIcon from "../images/skillIcons/styleComponents.png";
import { FaStar, FaRegStar } from "react-icons/fa";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SkillsContainer = ({ language }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [detailContent, setDetailContent] = useState({
    title: "REACT",
    info: "Moja ulubiona biblioteka JavaScript! Znacznie przyspiesza i ułatwia pracę dzięki JSX - rozszerzenie składni JavaScriptu o możliwość wstawiania HTML. Potrafię zbudować nowoczesne aplikacje oparte na komponentach i hookach React.",
    infoEn:
      "My Favorite JavaScript Library! Work is faster and more comfortable because of JSX - extension of JavaScript syntax with the possibility of inserting HTML. I can build modern applications based on React components and hooks.",
    level: 4,
  });
  const handleGIT = () => {
    setDetailContent({
      title: "REACT ROUTER",
      info: "Jest to biblioteka JS która pomaga web developerom stworzyć Single Page Aplication. Dzięki temu narzędziu łatwo stworzyć szybką i przyjemną navigacje dla całej aplikacji.",
      infoEn:
        "It is a JS library that helps a web developer to create a Single Page Aplication. With this tool, it's easy to create a quick and comfortable navigation for the entire application.",
      level: 4,
    });
  };
  const handleHTML = () => {
    setDetailContent({
      title: "HTML",
      info: "Hypertext Markup Language - język znaczników. Podstawowy kod używany do tworzenia struktury strony. Swoje piersze kroki w programowaniu robiłem poznając HTML.",
      infoEn:
        "Hypertext Markup Language - the basic code used to structure the page. My first steps in programming were learning HTML.",
      level: 5,
    });
  };
  const handleJS = () => {
    setDetailContent({
      title: "JAVASCRIPT",
      info: "Skryptowy język programowania. Dzięki niemu możemy dynamicznie tworzyć treść na stronie internetowej, kontrolować multimedia oraz animację. Poprzez javascript programiści mogą tchąć życie w stronę internetową lub aplikację.",
      infoEn:
        "Script programming language. Thanks to it, we can dynamically create content on the website, control multimedia and animation. By javascript, developers can give a life into a website or application.",
      level: 4,
    });
  };
  const handleREACT = () => {
    setDetailContent({
      title: "REACT",
      info: "Moja ulubiona biblioteka JavaScript! Znacznie przyspiesza i ułatwia pracę dzięki JSX - rozszerzenie składni JavaScriptu o możliwość wstawiania HTML. Potrafię zbudować nowoczesne aplikacje oparte na komponentach i hookach React.",
      infoEn:
        "My Favorite JavaScript Library! Work is faster and more comfortable because of JSX - extension of JavaScript syntax with the possibility of inserting HTML. I can build modern applications based on React components and hooks.",
      level: 4,
    });
  };
  const handleNEXT = () => {
    setDetailContent({
      title: "NEXT JS",
      info: "Framework, pozwalający budować nowoczesne aplikacje po stronie serwera korzystając z biblioteki React. Dzięki niemu, przeglądarki widzą wyrednerowany cały kod HTML co jest świetne dla SEO. Potężne narzędzie w rękach front-end developera.",
      infoEn:
        "Framework that allows you to build modern server-side applications using the React. Thanks to it, browsers can see all HTML code, which is great for SEO. A powerful tool in the hands of a front-end developer.",
      level: 3,
    });
  };
  const handleSTYLE = () => {
    setDetailContent({
      title: "STYLED COMPONENTS",
      info: "Biblioteka pozwalająca na bardzo proste stylowanie komponentów React. Zamiast importować pliki CSS, możemy dodać style bezpośrednio w pliku js.",
      infoEn:
        "A library that allows for very simple styling of React components. Instead of importing CSS files, we can add styles directly in the js file.",
      level: 4,
    });
  };
  const handleCSS = () => {
    setDetailContent({
      title: "CSS",
      info: "Kaskadowe arkusze stylów, które pozwalają na modyfikowanie wyglądu strony internetowej.",
      infoEn:
        "Cascading style sheets that allow you to modify the appearance of a website.",
      level: 5,
    });
  };
  const handleREDUX = () => {
    setDetailContent({
      title: "REDUX",
      info: "Biblioteka JS, który pozwala na zarządzanie stanem aplikacji. Idealnie sprawdza się przy tworzeniu dużych aplikacji.",
      infoEn:
        "JS library that allows you to manage the state of the application. It is perfect for creating large applications.",
      level: 2,
    });
  };

  return (
    <Wrapper className="skills-container">
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="iconsContainer"
      >
        <img
          onClick={handleGIT}
          className={detailContent.title === "REACT ROUTER" && "activeIMG"}
          src={reactRouterIcon}
          alt="git"
        />
        <img
          className={detailContent.title === "HTML" && "activeIMG"}
          onClick={handleHTML}
          src={htmlIcon}
          alt="html"
        />
        <img
          className={detailContent.title === "CSS" && "activeIMG"}
          onClick={handleCSS}
          src={cssIcon}
          alt="css"
        />
        <img
          onClick={handleSTYLE}
          src={styleComponentsIcon}
          alt="style components"
          className={detailContent.title === "STYLED COMPONENTS" && "activeIMG"}
        />
        <img
          className={detailContent.title === "JAVASCRIPT" && "activeIMG"}
          onClick={handleJS}
          src={jsIcon}
          alt="js"
        />
        <img
          className={detailContent.title === "REACT" && "activeIMG"}
          onClick={handleREACT}
          src={reactIcon}
          alt="react"
        />
        <img
          className={detailContent.title === "NEXT JS" && "activeIMG"}
          onClick={handleNEXT}
          src={nextjsIcon}
          alt="nextJS"
        />
        <img
          className={detailContent.title === "REDUX" && "activeIMG"}
          onClick={handleREDUX}
          src={reduxIcon}
          alt="redux"
        />
      </div>
      <div className="detailsContainer">
        <h2>{detailContent.title}</h2>
        <p>
          {language === "polish" ? detailContent.info : detailContent.infoEn}
        </p>
        <div className="levelContainer">
          <h4>POZIOM: </h4>

          {[...Array(detailContent.level)].map((item, index) => {
            return <FaStar className="starIcon " key={index} />;
          })}
          {[...Array(5 - detailContent.level)].map((item, index) => {
            return <FaRegStar className="starIcon starRotate" key={index} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60vh;
  @media screen and (max-width: 800px) {
    height: auto;
  }

  .iconsContainer {
    width: 50%;
    margin-left: 5%;
    height: 90%;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    img {
      width: 15%;
      margin: 5%;
      filter: saturate(0.1);
      cursor: pointer;
      :hover {
        filter: saturate(0.9);
      }
      position: absolute;
      animation: imgSizer 3s ease infinite alternate;
      @keyframes imgSizer {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.2);
        }
      }
      :nth-child(1) {
        top: 5%;
        left: 0%;
      }
      :nth-child(2) {
        top: 0%;
        left: 40%;
        animation-delay: 1s;
      }
      :nth-child(3) {
        top: 25%;
        left: 20%;
        animation-delay: 1.5s;
      }
      :nth-child(4) {
        top: 10%;
        left: 75%;
      }
      :nth-child(5) {
        top: 40%;
        left: 50%;
        animation-delay: 2s;
      }
      :nth-child(6) {
        top: 55%;
        left: 2%;
        animation-delay: 1s;
      }
      :nth-child(7) {
        top: 65%;
        left: 30%;
      }
      :nth-child(8) {
        top: 60%;
        left: 70%;
        animation-delay: 2s;
      }
    }
    .activeIMG {
      animation: none;
      transform: scale(1.5);
      filter: none;
    }
    @media screen and (max-width: 800px) {
      width: 90vw;
      height: 40vh;
    }
  }
  .detailsContainer {
    width: 40%;
    background: rgb(23, 22, 36);
    height: 100%;
    padding: 2vh 3vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 2.6rem;
      letter-spacing: 3px;
      text-align: center;
      color: rgb(197, 103, 40);
    }
    p {
      font-size: 1.2rem;
      text-align: center;
    }
    .levelContainer {
      display: flex;
      justify-content: left;
      align-items: center;
      width: 100%;
      margin-bottom: 7vh;
      h4 {
        font-size: 1.5rem;
        font-family: "Saira Stencil One", sans-serif;
        font-weight: 400;
        margin-right: 1vw;
      }
      .starIcon {
        color: rgb(197, 103, 40);
        font-size: 1.5rem;
        margin-left: 0.5vw;
        margin-bottom: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      svg:not(.starRotate) + .starRotate {
        animation: rotate 5s linear infinite;
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
    @media screen and (max-width: 800px) {
      width: 100vw;
      padding: 3vh 10vw;
      height: auto;
      p {
        margin: 8vh auto;
      }
      .levelContainer {
        margin-bottom: 3vh;
        h4 {
          margin-right: 3vw;
        }
      }
    }
  }
`;

export default SkillsContainer;
