import { useEffect } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import aboutImg from "../images/aboutImg.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import resume from "../JarosławJanasCV.pdf";

import SkillsContainer from "../components/SkillsContainer";

const About = ({ language }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  //wiek
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  return (
    <Wrapper id="aboutMe" className="main-page">
      <div className="title">
        <h1>Curriculum Vitae</h1>
        <h2>Kim jestem?</h2>
      </div>
      <div className="main-info">
        <div data-aos="fade-left" className="pictureAndCv">
          <img src={aboutImg} alt="about me" />
          <div className="personal-info">
            <h3>
              Nazywam się Jarosław Janas i jestem <br /> Front-End Developerem.
            </h3>
            <p>
              Swoją pracę z kodem rozpocząłem w 2020 roku. Programowanie sprawia
              mi ogromną przyjemność i chcę być w tym lepszy każdego dnia.
              Specjalizuje się w tworzeniu stron internetowych i aplikacji w
              języku JavaScript.
            </p>

            {/* <Link to="../JarosławJanasCV.pdf" target="_blank" download>
              Pobierz CV
            </Link> */}

            <a href={resume} download="Jarosław Janas CV.pdf">
              {" "}
              Pobierz CV{" "}
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="personal-info-list">
          <h4 className="subTitle">Informacje:</h4>
          <p>
            Imię i Nazwisko: <span>Jarosław Janas</span>
          </p>
          <p>
            Wiek: <span>{calculate_age(new Date(1995, 7, 21))} lat</span>
          </p>
          <p>
            Narodowość: <span>Polska</span>
          </p>
          <p>
            Adres: <span>Kraków, Polska</span>
          </p>
          <p>
            Języki: <span>Polski, Angielski</span>
          </p>
          <p>
            Telefon: <span>798 194 305</span>
          </p>
          <p>
            Email: <span>jarekjanas95@gmail.com</span>
          </p>
          <p>
            Zatrudnienie: <span>Dostępny</span>
          </p>
        </div>
        <div className="skills">
          <h4 className="subTitle">Moje Umiejętności</h4>
          <SkillsContainer language={language} />
        </div>
        {/* <div className="skills">
          <h4 className="subTitle">Moje Umiejętności</h4>
          <div className="skills-container">
            <section className="personal-skills">
              <h5>Personalne</h5>
              <div className="one-skill">
                <p>Praca Zespołowa</p>
                <div className="container">
                  <div data-aos="teamWork" className="skillItem teamWork">
                  </div>
                  <p>0%</p>
                  <p>100%</p>
                </div>
              </div>
              <div className="one-skill">
                <p>Kreatywność</p>
                <div className="container">
                  <div data-aos="creative" className="skillItem creative">
                  </div>
                  <p>0%</p>
                  <p>100%</p>
                </div>
              </div>
              <div className="one-skill">
                <p>Zaangażowanie</p>
                <div className="container">
                  <div data-aos="passion" className="skillItem passion">
                  </div>
                  <p>0%</p>
                  <p>100%</p>
                </div>
              </div>
            </section>
            <section className="professional-skills">
              <h5>Zawodowe</h5>
              <div className="one-skill">
                <p>HTML & CSS*</p>
                <div className="container">
                  <div
                    data-aos="htmlCssSkill"
                    className="skillItem htmlCssSkill"
                  >
                  </div>
                  <p>0%</p>
                  <p>100%</p>
                </div>
              </div>
              <div className="one-skill">
                <p>JAVASCRIPT*</p>
                <div className="container">
                  <div data-aos="jsSkill" className="skillItem jsSkill">
                  </div>
                  <p>0%</p>
                  <p>100%</p>
                </div>
              </div>
              <div className="one-skill">
                <p>REACT*</p>
                <div className="container">
                  <div data-aos="reactSkill" className="skillItem reactSkill">
                  </div>
                  <p>0%</p>
                  <p>100%</p>
                </div>
              </div>
            </section>
            <p className="skillsInfoStar">
              *Dlaczego paski umiejętności maleją i rosną? Choć każdego dnia
              umiem więcej to również i języki programowania się rozwijają.
            </p>
          </div>
        </div> */}
        <h4 className="subTitle">Doświadczenie i Edukacja</h4>
        <div data-aos="fade-left" className="experienceAndEducation">
          <div className="EandE">
            <div className="oneEandE">
              <div className="borderEandE">
                <p>
                  <MdWork />
                </p>
              </div>
              <div className="infoEandE">
                <h6>2021-OBECNIE</h6>
                <h4>Front-End Developer – Freelancer</h4>
                <p>
                  <a href="https://www.hotelmiodowa.pl">
                    - https://www.hotelmiodowa.pl
                  </a>
                  <a href="https://www.focuseye.pl">
                    - https://www.focuseye.pl
                  </a>
                  <a href="https://www.dorotaszydelkuje.pl ">
                    - https://www.dorotaszydelkuje.pl{" "}
                  </a>
                  <a href="https://www.telefony-gorlice.pl">
                    - https://www.telefony-gorlice.pl
                  </a>
                  {/* - https://www.pyszotka.pl */}
                  {/*- https://zakupy-lista.netlify.app/ */}
                </p>
              </div>
            </div>
            <div className="oneEandE">
              <div className="borderEandE">
                <p>
                  <MdWork />
                </p>
              </div>
              <div className="infoEandE">
                <h6>2019-OBECNIE</h6>
                <h4>
                  Recepcjonista Hotelu - Aparthotel Miodowa, Blue Aparthotel
                </h4>
                <p>
                  przyjmowanie rezerwacji, obsługa gości hotelowych,
                  reprezentowanie obiektu
                </p>
              </div>
            </div>
            <div className="oneEandE">
              <div className="borderEandE">
                <p>
                  <MdWork />
                </p>
              </div>
              <div className="infoEandE">
                <h6>2018-2018</h6>
                <h4>
                  Żołnierz Wojska Polskiego - 22 Karpacki Batalion Piechoty
                  Górskiej w Kłodzku
                </h4>
                <p>
                  służba wojskowa i kształcenie się w zakresie działań Sił
                  Zbrojnych RP, stopień kaprala
                </p>
              </div>
            </div>
            {/* <div className="oneEandE">
              <div className="borderEandE">
                <p>
                  <MdWork />
                </p>
              </div>
              <div className="infoEandE">
                <h6>2017-2018</h6>
                <h4>Menager Hostelu - Hostel Heynow</h4>
                <p>
                  administracja hostelu, rekrutacja pracowników, zarządzanie
                  personelem, ustalanie grafiku zmian, przyjmowanie rezerwacji
                  oraz obsługa gości, operowanie systemami rezerwacyjnymi
                </p>
              </div>
            </div> */}
          </div>
          <div className="EandE">
            <div className="oneEandE">
              <div className="borderEandE">
                <p>
                  <FaGraduationCap />
                </p>
              </div>
              <div className="infoEandE">
                <h6>2020-OBECNIE</h6>
                <h4>Programista - Kursy na platformie e-learningowej UDEMY</h4>
                <p>HTML, CSS, JAVASRIPT, REACT, REDUX, NEXT.JS</p>
              </div>
            </div>
            <div className="oneEandE">
              <div className="borderEandE">
                <p>
                  <FaGraduationCap />
                </p>
              </div>
              <div className="infoEandE">
                <h6>2017-2019</h6>
                <h4>Magister - Uniwersytet Pedagogiczny im. KEN w Krakowie</h4>
                <p>
                  pedagogika, edukacja dla bezpieczeństwa i zarządzanie
                  kryzysowe
                </p>
              </div>
            </div>
            <div className="oneEandE">
              <div className="borderEandE">
                <p>
                  <FaGraduationCap />
                </p>
              </div>
              <div className="infoEandE">
                <h6>2014-2017</h6>
                <h4>Licencjat - Uniwersytet Pedagogiczny im. KEN w Krakowie</h4>
                <p>bezpieczeństwo narodowe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 30vh;
  position: relative;
  .main-info {
    position: relative;
    top: 30vh;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    .pictureAndCv {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 35%;
        height: 60vh;
        filter: grayscale(0.9);
        border-radius: 20px;
        border: 2px solid rgb(9, 100, 100);
        margin-bottom: 3vh;
        object-fit: cover;
      }
      @media screen and (max-width: 800px) {
        flex-direction: column-reverse;
        img {
          width: 90%;
          height: 50vh;
        }
      }
    }
    .personal-info {
      width: 45%;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: "Mirza", sans-serif;
      position: relative;
      h3 {
        font-size: 1.7rem;
      }
      p {
        font-size: 1.3rem;
        text-align: justify;
        margin: 3vh auto 10vh;
      }

      a {
        font-family: "Saira Stencil One", sans-serif;
        font-size: 1.3rem;
        padding: 0.7rem 2rem;
        margin: 0 auto;
        background: transparent;
        border: 2px solid rgb(197, 103, 40);
        transition: 0.4s;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: rgb(197, 103, 40);
        :hover {
          background: rgb(197, 103, 40);
          color: white;
        }
      }

      @media screen and (max-width: 800px) {
        width: 90%;
        height: auto;
        a {
          width: 150px;
          height: 50px;
          line-height: 1;
          padding: 0;
          margin: -2vh auto 7vh;
        }
      }
    }
    .personal-info-list {
      width: 80%;
      margin: 10vh auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      min-height: 45vh;
      text-align: center;
      position: relative;
      p {
        text-align: left;
        padding-left: 3vw;
        width: 45%;
        font-size: 1.4rem;
        color: #aaa;
        color: rgb(197, 103, 40);
        font-weight: 500;
        letter-spacing: 2px;
        span {
          color: white;
          font-weight: 600;
          margin-left: 4px;
        }
      }
      @media screen and (max-width: 800px) {
        width: 95%;
        flex-direction: column;
        p {
          width: auto;
          text-align: center;
          font-size: 1.3rem;
          letter-spacing: 0;
          width: 100%;
          margin: 2vh auto;
        }
      }
    }
    .skills {
      margin-top: 5vh;
      margin-bottom: 5vh;
      width: 100%;
      position: relative;
      @media screen and (max-width: 800px) {
        width: 100vw;
      }
      .skills-container {
        width: 90%;
        /* background: rgb(23, 22, 36); */
        border: 5px solid rgb(23, 22, 36);
        margin: 10vh auto;
        display: flex;
        justify-content: space-between;
        /* flex-wrap: wrap; */
        align-items: center;
        /* padding: 2vh 1vw; */
        position: relative;
        min-height: 60vh;
        @media screen and (max-width: 800px) {
          width: 100%;
          flex-direction: column;
          /* padding: 0px; */
          height: auto;
        }
        .skillsInfoStar {
          width: 100%;
        }
        section {
          width: 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1;
          height: 50vh;
          @media screen and (max-width: 800px) {
            width: 100%;
            height: auto;
          }
          h5 {
            margin-bottom: 7vh;
            font-size: 1.6rem;
            letter-spacing: 1px;
            text-align: center;
            text-transform: uppercase;
            @media screen and (max-width: 800px) {
              margin-top: 5vh;
            }
          }
          .one-skill {
            width: 100%;
            margin: 2vh auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p {
              margin-bottom: 1.3rem;
              font-size: 1.4rem;
            }
            .container {
              width: 90%;
              background: #000;
              height: 0.7rem;
              border-radius: 5px;
              position: relative;
              @media screen and (max-width: 800px) {
                width: 100%;
              }
              p:nth-of-type(1) {
                position: absolute;
                left: 0;
                top: -150%;
                font-size: 0.8rem;
              }
              p:nth-of-type(2) {
                position: absolute;
                right: 0;
                top: -150%;
                font-size: 0.8rem;
              }
            }

            .skillItem {
              border-radius: 5px;
              height: 100%;
              color: white;
              position: relative;
              /* p {
                position: absolute;
                right: 0;
                top: -300%;
                transform: translateX(50%);
              } */
            }

            /* [data-aos="teamWork"] {
              width: 0;
              transition-property: width;
              &.aos-animate {
                width: 85%;
              }
            }
            [data-aos="creative"] {
              width: 0;
              transition-property: width;
              &.aos-animate {
                width: 75%;
              }
            }
            [data-aos="passion"] {
              width: 0;
              transition-property: width;
              &.aos-animate {
                width: 95%;
              }
            } */
            /* [data-aos="htmlCssSkill"] {
              width: 0;
              transition-property: width;
              &.aos-animate {
                width: 75%;
              }
            }
            [data-aos="jsSkill"] {
              width: 0;
              transition-property: width;
              &.aos-animate {
                width: 65%;
              }
            }
            [data-aos="reactSkill"] {
              width: 0;
              transition-property: width;
              &.aos-animate {
                width: 55%;
              }
            } */
          }
          /* .htmlCssSkill {
            animation: htmlCssUpAndDown 5s linear infinite;
            @keyframes htmlCssUpAndDown {
              0% {
                width: 85%;
              }
              80% {
                width: 50%;
              }
              100% {
                width: 85%;
              }
            }
          }
          .jsSkill {
            animation: jsUpAndDown 5s linear infinite;
            @keyframes jsUpAndDown {
              0% {
                width: 50%;
              }
              80% {
                width: 20%;
              }
              100% {
                width: 50%;
              }
            }
          }
          .reactSkill {
            animation: reactUpAndDown 5s linear infinite;
            @keyframes reactUpAndDown {
              0% {
                width: 70%;
              }
              80% {
                width: 30%;
              }
              100% {
                width: 70%;
              }
            }
          } */
        }
      }
    }
    .experienceAndEducation {
      margin-top: 5vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      position: relative;
      @media screen and (max-width: 800px) {
        width: 100%;
        flex-direction: column;
        .EandE:nth-of-type(1) {
          padding-bottom: 10vh;
          border-bottom: 2px solid white;
        }
        .EandE:nth-of-type(2) {
          padding-top: 10vh;
        }
      }
      .EandE {
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        @media screen and (max-width: 800px) {
          width: 100%;
        }
        .oneEandE {
          margin: 2vh auto;
          width: 100%;
          height: 25vh;
          display: flex;
          align-items: center;
          justify-content: left;
          @media screen and (max-width: 800px) {
            min-height: 35vh;
            margin: 3vh auto;
            width: 90%;
          }
          .borderEandE {
            width: 2px;
            height: 80%;
            background: #eee;
            margin-right: 2rem;
            position: relative;
            p {
              position: absolute;
              left: 50%;
              top: 0%;
              transform: translateX(-50%);
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: rgb(197, 103, 40);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.3rem;
            }
          }
          .infoEandE {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h4 {
              margin: 1rem 0;
              font-size: 1.5rem;
            }
            h6 {
              font-size: 0.9rem;
              background: #222;
              width: 40%;
              padding: 3px;
              text-align: center;
              border-radius: 10px;
              font-family: "Saira Stencil One", sans-serif;
              font-weight: 400;
            }
            p {
              font-size: 1rem;
              display: flex;
              flex-direction: column;
              a {
                color: #fff;
                text-decoration: none;
                cursor: pointer;
              }
            }
            @media screen and (max-width: 800px) {
              h4 {
                font-size: 1.3rem;
              }
              h6 {
                width: 55%;
              }
            }
          }
        }
      }
    }
  }
`;

export default About;
