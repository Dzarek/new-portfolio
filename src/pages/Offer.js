import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { MdMobileFriendly } from "react-icons/md";
import { HiOutlineSupport } from "react-icons/hi";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="offer" className="main-page">
      <div className="title">
        <h1>Co oferuje?</h1>
        <h2>Oferta</h2>
      </div>
      <div data-aos="fade-down" className="offerContent">
        <div className="singleOffer">
          <FaEdit className="icon" />
          <h3>kreatywny i intuicyjny interface</h3>
          <p>
            Interfejs stron internetowych i aplikacji przygotowuję tak, aby był
            jednocześnie interesujący jak i łatwy w obsłudze.
          </p>
        </div>
        <div className="singleOffer">
          <MdMobileFriendly className="icon" />
          <h3>dobrze wyglądających w rozdzielczości desktopowej i mobilnej</h3>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  .offerContent {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 70vw;
    margin: 30vh auto 0;
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
    background: rgb(23, 22, 36);
    /* background: #000; */
    text-align: center;
    transition: 0.3s;
    :hover {
      transform: scale(1.1);
    }
    .icon {
      font-size: 3rem;
    }
    h3 {
      font-size: 1.4rem;
      text-transform: uppercase;
      color: rgb(197, 103, 40);
    }
  }
`;

export default Offer;
