import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { MdOutlinePhoneIphone, MdMail } from "react-icons/md";
import { AiFillHome, AiFillFolderOpen } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <Wrapper className="main-nav">
      <section className="media-icons">
        <ImFacebook2 className="icon" />
        <ImLinkedin className="icon" />
        <MdOutlinePhoneIphone className="icon" />
        <MdMail className="icon" />
      </section>
      <section className="nav-list">
        <Link to="home" smooth={true} duration={1000}>
          <AiFillHome className="icon" /> Strona Główna
        </Link>
        <Link to="home" smooth={true} duration={1000}>
          <BsPersonFill className="icon" /> O mnie
        </Link>
        <Link to="home" smooth={true} duration={1000}>
          <FaCode className="icon" /> Oferta
        </Link>
        <Link to="home" smooth={true} duration={1000}>
          <AiFillFolderOpen className="icon" /> Portfolio
        </Link>
        <Link to="home" smooth={true} duration={1000}>
          <RiMailOpenFill className="icon" /> Kontakt
        </Link>
      </section>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Jarosław Janas <br /> Front-End
          Developer <br /> Wszelkie Prawa Zastrzeżone
        </p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(7, 8, 18);
  color: white;
  z-index: 999;
  opacity: 0.85;
  .main-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
    .icon {
      cursor: pointer;
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
      padding: 1vh;
      margin: 2vh 0 2vh 2vw;
      font-family: "Saira Stencil One", sans-serif;
      font-size: 1.2rem;
      cursor: pointer;
      display: flex;
      justify-items: center;
      align-items: center;

      .icon {
        margin-right: 1vw;
      }
    }
  }
`;

export default Navbar;
