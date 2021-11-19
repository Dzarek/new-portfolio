import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";
// import {
//   Link,
//   Button,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";

import { ImFacebook2, ImLinkedin, ImMail3, ImPhone } from "react-icons/im";
import { AiFillHome, AiFillFolderOpen } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa";

const Navbar = ({ setLanguage, language }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handlePhone = () => {
    setShowPhone(!showPhone);
    setShowEmail(false);
  };
  const handleEmail = () => {
    setShowPhone(false);
    setShowEmail(!showEmail);
  };

  return (
    <>
      <Wrapper>
        <div className={!showMenu ? "main-nav" : "main-nav showMain-Nav"}>
          <section className="media-icons">
            <a href="https://pl-pl.facebook.com/jarek.janas.90">
              <ImFacebook2 className="icon" />
            </a>
            <a href="https://pl.linkedin.com/in/jaros%C5%82aw-janas-7b55a3218?trk=people-guest_people_search-card">
              <ImLinkedin className="icon" />
            </a>

            <ImPhone className="icon" onClick={handlePhone} />
            <ImMail3 className="icon" onClick={handleEmail} />
            <div className="media-info">
              {showPhone && <p>798 194 305</p>}
              {showEmail && <p>jarekjanas95@gmail.com</p>}
            </div>
          </section>
          <section className="nav-list">
            <Link
              to="home"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={() => setShowMenu(false)}
            >
              <AiFillHome className="icon" />{" "}
              {language === "polish" ? `Strona Główna` : `Home`}
            </Link>
            <Link
              to="aboutMe"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={() => setShowMenu(false)}
            >
              <BsPersonFill className="icon" />
              {language === "polish" ? `O mnie` : `About Me`}
            </Link>
            <Link
              to="offer"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={() => setShowMenu(false)}
            >
              <FaCode className="icon" />
              {language === "polish" ? `Oferta` : `Service`}
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={() => setShowMenu(false)}
            >
              <AiFillFolderOpen className="icon" /> Portfolio
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={() => setShowMenu(false)}
            >
              <RiMailOpenFill className="icon" />
              {language === "polish" ? `Kontakt` : `Contact`}
            </Link>
            <div className="languages">
              <button onClick={() => setLanguage("polish")}>PL</button>
              <button onClick={() => setLanguage("english")}>EN</button>
            </div>
          </section>
          <footer className="footer">
            <p>
              &copy; {new Date().getFullYear()} Jarosław Janas <br /> Front-End
              Developer <br />
              {language === "polish"
                ? `Wszelkie Prawa Zastrzeżone`
                : `All Right Reserved`}
            </p>
          </footer>
        </div>
      </Wrapper>
      {!showMenu ? (
        <button onClick={() => setShowMenu(!showMenu)} className="navHamburger">
          <HiMenu />
        </button>
      ) : (
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="navHamburger2"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

const Wrapper = styled.div`
  /* width: 20vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(7, 8, 18);
  color: white;
  z-index: 999;
  opacity: 0.8; */
  /* @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    opacity: 1;
    transition: 0.3s;
    /* transform: translateX(-100vw); */
  /* }  */

  .main-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(7, 8, 18);
    color: white;
    z-index: 999;
    opacity: 0.8;
    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      /* width: 80vw; */
      width: 100vw;
      opacity: 1;
      transition: 0.7s;
      transform: translateY(-100vh);
      margin: 0 auto;
    }
    .media-icons {
      height: 15vh;
      color: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 1.5rem;
      width: 80%;
      margin: 0 auto;
      flex-wrap: wrap;
      position: relative;
      a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .icon {
        cursor: pointer;
        transition: 0.1s;
        color: white;
        font-size: 1.5rem;
        :hover {
          margin-bottom: 5px;
        }
      }
      .media-info {
        width: 100%;
        margin: 0vh auto;
        text-align: center;
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translateX(-50%);
        p {
          font-size: 1rem;
          font-family: "Saira Stencil One", sans-serif;
        }
      }
    }
    .footer {
      height: 15vh;
      width: 80%;
      font-family: "Saira Stencil One", sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
      font-size: 0.8rem;
    }
    .nav-list {
      height: 70vh;
      width: 80%;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      a {
        width: 100%;
        padding: 5px;
        margin: 2vh 0 2vh 2vw;
        font-family: "Saira Stencil One", sans-serif;
        font-size: 1.2rem;
        cursor: pointer;
        display: flex;
        justify-items: center;
        align-items: center;
        transition: 0.4s;
        @media screen and (max-width: 800px) {
          margin: 2vh auto;
          text-align: center;
          display: block;
          font-size: 1.4rem;
          padding: 0 5px;
        }
        &.active {
          margin-left: 4vw;
          color: rgb(197, 103, 40);
          @media screen and (max-width: 800px) {
            /* margin-left: 10vw; */
            margin-left: 0vw;
          }
        }
        :hover {
          margin-left: 4vw;
          @media screen and (max-width: 800px) {
            /* margin-left: 10vw; */
            margin-left: 0vw;
          }
        }
        .icon {
          margin-right: 1vw;
          @media screen and (max-width: 800px) {
            margin-right: 3vw;
          }
        }
      }
      .languages {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 3vh;
        width: 60%;
        button {
          font-size: 1rem;
          background: transparent;
          border: 1px solid white;
          border-radius: 5px;
          color: white;
          padding: 0.5rem;
          font-family: "Saira Stencil One", sans-serif;
          font-size: 0.9rem;
          transition: 0.4s;
          cursor: pointer;
          width: 40px;
          height: 40px;
          :hover {
            background: white;
            color: black;
          }
        }
      }
    }
  }
  .showMain-Nav {
    transition: 0.7s;
    transform: translateY(0vh);
  }
`;

export default Navbar;
