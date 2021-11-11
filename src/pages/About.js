import { useEffect } from "react";
import styled from "styled-components";
import aboutImg from "../images/aboutImg.jpg";
// import { GiSkills } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
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
            {/* <div className="personal-info-text"> */}
            <h3>
              Nazywam się Jarosław Janas i jestem <br /> Front-End Developerem.
            </h3>
            <p>
              Swoją pracę z kodem rozpoczołem w 2020 roku. Programowanie sprawia
              mi ogromną przyjemność i chcę być w tym lepszy każdego dnia.
              Specjalizuje się w tworzeniu stron internetowych i aplikacji w
              języku JavaScript.
            </p>
            <button>Pobierz CV</button>
          </div>
          {/* </div> */}
          {/* <div className="borderBetween"></div> */}
        </div>
        <div data-aos="fade-left" className="personal-info-list">
          <h4 className="subTitle">Informacje:</h4>
          <p>
            Imię i Nazwisko: <span>Jarosław Janas</span>
          </p>
          {/* <p>
            Nazwisko: <span>Janas</span>
          </p> */}
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
          <div className="skills-container">
            <section className="personal-skills">
              <h5>Personalne</h5>
              <div className="one-skill">
                <p>Praca Zespołowa</p>
                <div className="container">
                  <div data-aos="teamWork" className="skillItem teamWork">
                    <p>85%</p>
                  </div>
                </div>
              </div>
              <div className="one-skill">
                <p>Kreatywność</p>
                <div className="container">
                  <div data-aos="creative" className="skillItem creative">
                    <p>75%</p>
                  </div>
                </div>
              </div>
              <div className="one-skill">
                <p>Zaangażowanie</p>
                <div className="container">
                  <div data-aos="passion" className="skillItem passion">
                    <p>95%</p>
                  </div>
                </div>
              </div>
            </section>
            {/* <GiSkills className="iconBg" /> */}
            <section className="professional-skills">
              <h5>Zawodowe</h5>
              <div className="one-skill">
                <p>HTML & CSS</p>
                <div className="container">
                  <div
                    data-aos="htmlCssSkill"
                    className="skillItem htmlCssSkill"
                  >
                    <p>75%</p>
                  </div>
                </div>
              </div>
              <div className="one-skill">
                <p>JAVASCRIPT</p>
                <div className="container">
                  <div data-aos="jsSkill" className="skillItem jsSkill">
                    <p>65%</p>
                  </div>
                </div>
              </div>
              <div className="one-skill">
                <p>REACT</p>
                <div className="container">
                  <div data-aos="reactSkill" className="skillItem reactSkill">
                    <p>55%</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
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
                <h6>2018-2019</h6>
                <h4>Doradca Klienta - Salon Play</h4>
                <p>
                  sprzedaż abonamentów i telefonów klientom sieci Play, dbanie o
                  wizerunek sieci i wygląd salonu Play
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
                <p>HTML, CSS, JAVASRIPT, REACT, NODE, GATSBY</p>
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
  min-height: 400vh;
  padding: 10vh 0;

  .title {
    position: absolute;
    top: 10vh;
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
  .subTitle {
    width: 100%;
    margin-bottom: 3vh;
    font-size: 1.7rem;
    letter-spacing: 3px;
    text-align: center;
    text-transform: uppercase;
    font-family: "Saira Stencil One", sans-serif;
  }
  .main-info {
    position: absolute;
    top: 40vh;
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
      }
    }
    .personal-info {
      width: 45%;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
      font-family: "Mirza", sans-serif;
      /* .personal-info-text { */
      h3 {
        /* margin-bottom: 3vh; */
        font-size: 1.7rem;
      }
      p {
        font-size: 1.3rem;
        text-align: justify;
        margin: 3vh auto 10vh;
      }
      button {
        font-family: "Mirza", sans-serif;
        font-size: 1.3rem;
        padding: 0.7rem 2rem;
        margin: 0 auto;
        background: transparent;
        /* border: 2px solid white; */
        border: 2px solid rgb(197, 103, 40);
        /* color: white; */
        color: rgb(197, 103, 40);
        transition: 0.4s;
        border-radius: 10px;
        cursor: pointer;
        :hover {
          /* background: white; */
          background: rgb(197, 103, 40);
          /* color: black; */
          color: white;
        }
      }
    }
    /* .borderBetween {
      width: 90%;
      height: 2px;
      background: #ddd;
      margin: 5vh auto 2vh;
    } */
    .personal-info-list {
      width: 80%;
      margin: 10vh auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      min-height: 45vh;
      text-align: center;

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
    }
    .skills {
      margin-top: 5vh;
      margin-bottom: 5vh;
      width: 100%;
      /* .skills-title {
        font-size: 1.7rem;
        letter-spacing: 3px;
        text-align: center;
        text-transform: uppercase;
        font-family: "Saira Stencil One", sans-serif;
      } */
      .skills-container {
        width: 90%;
        background: rgb(23, 22, 36);
        margin: 10vh auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 2vh 2vw;
        position: relative;
        min-height: 60vh;
        .iconBg {
          font-size: 50vh;
          color: rgb(9, 8, 20);
          z-index: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        section {
          width: 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1;
          height: 50vh;
          h5 {
            margin-bottom: 7vh;
            font-size: 1.6rem;
            letter-spacing: 1px;
            text-align: center;
            text-transform: uppercase;
          }
          .one-skill {
            width: 100%;
            margin: 2vh auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p {
              margin-bottom: 1.2rem;
              font-size: 1.4rem;
            }
            .container {
              width: 90%;
              background: #000;
              height: 0.7rem;
              border-radius: 5px;
              /* overflow-x: hidden; */
            }
            .skillItem {
              border-radius: 5px;
              height: 100%;
              color: white;
              /* background-color: darkorange; */
              position: relative;
              p {
                position: absolute;
                right: 0;
                top: -300%;
                transform: translateX(50%);
              }
            }
            /* .teamWork {
              width: 85%;
            }
            .creative {
              width: 75%;
            }
            .passion {
              width: 95%;
            }
            .htmlCssSkill {
              width: 75%;
            }
            .jsSkill {
              width: 65%;
            }
            .reactSkill {
              width: 55%;
            } */
            [data-aos="teamWork"] {
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
            }
            [data-aos="htmlCssSkill"] {
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
            }
          }
        }
      }
    }
    .experienceAndEducation {
      margin-top: 5vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      .EandE {
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .oneEandE {
          margin: 2vh auto;
          width: 100%;
          height: 25vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
              /* text-transform: uppercase; */
            }
            h6 {
              font-size: 1.1rem;
              /* background: rgb(197, 103, 40); */
              background: #222;
              width: 35%;
              padding: 3px;
              text-align: center;
              border-radius: 10px;
            }
            p {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;

export default About;
