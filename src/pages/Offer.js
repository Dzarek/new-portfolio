import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { MdMobileFriendly } from "react-icons/md";
import { HiOutlineSupport } from "react-icons/hi";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Offer = ({ language }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="offer" className="main-page">
      {language ? (
        <div className="title">
          <h1>Co oferuje?</h1>
          <h2>Oferta</h2>
        </div>
      ) : (
        <div className="title">
          <h1>What I Do?</h1>
          <h2>Service</h2>
        </div>
      )}
      {language ? (
        <div data-aos="fade-down" className="offerContent">
          <div className="singleOffer">
            <FaEdit className="icon" />
            <h3>kreatywny i intuicyjny interface</h3>
            <p>
              Interfejs stron internetowych i aplikacji przygotowuję tak, aby
              był jednocześnie interesujący jak i łatwy w obsłudze.
            </p>
          </div>
          <div className="singleOffer">
            <MdMobileFriendly className="icon" />
            <h3>
              dobrze wyglądających w rozdzielczości desktopowej i mobilnej
            </h3>
            <p>
              Dokładam starań, aby interfejs prezentował się jak najlepiej w
              każdej rozdzielczości.
            </p>
          </div>
          <div className="singleOffer">
            <HiOutlineSupport className="icon" />
            <h3>szybkie wsparcie</h3>
            <p>
              Najszybciej jak to tylko możliwe, pomagam w naprawieniu losowo
              napotkanego błędu.
            </p>
          </div>
        </div>
      ) : (
        <div data-aos="fade-down" className="offerContent">
          <div className="singleOffer">
            <FaEdit className="icon" />
            <h3>creative and intuitive interface</h3>
            <p>
              My interface of websites and applications is interesting and easy
              to use at the same time.
            </p>
          </div>
          <div className="singleOffer">
            <MdMobileFriendly className="icon" />
            <h3>looking good in desktop and mobile resolutions</h3>
            <p>
              I try to make the interface look as good as possible in any
              resolution.
            </p>
          </div>
          <div className="singleOffer">
            <HiOutlineSupport className="icon" />
            <h3>fast support</h3>
            <p>As soon as possible, I help to fix any random error.</p>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  .title {
    h1 {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
  }
  .offerContent {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 70vw;
    margin: 30vh auto 0;
    @media screen and (max-width: 800px) {
      width: 95vw;
      flex-direction: column;
      margin: 30vh auto -5vh;
    }
  }
  .singleOffer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 25%;
    height: 40vh;
    padding: 10px 15px;
    color: white;
    border-radius: 10px;
    background: #222;
    text-align: center;
    transition: 0.3s;
    :hover {
      transform: scale(1.1);
    }
    .icon {
      font-size: 3rem;
    }
    h3 {
      font-size: 1.1rem;
      text-transform: uppercase;
      color: rgb(197, 103, 40);
      font-family: "Saira Stencil One", sans-serif;
      font-weight: 400;
    }
    p {
      font-size: 0.95rem;
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      min-height: 30vh;
      margin: 5vh auto;
      :hover {
        transform: none;
      }
      .icon {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
`;

export default Offer;
