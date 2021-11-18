import { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { ImMail3, ImPhone } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
import MyForm from "../components/MyForm";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="contact" className="main-page">
      <div className="title">
        <h1>Napisz do mnie</h1>
        <h2>Kontakt</h2>
      </div>
      <div data-aos="fade-up" className="contactContainer">
        <div className="phoneAndMail">
          <div>
            <ImPhone className="icon" />
            <h2>Telefon:</h2>
            <p>798 194 305</p>
          </div>
          <div>
            <ImMail3 className="icon" />
            <h2>Email:</h2>
            <p>jarekjanas95@gmail.com</p>
          </div>
          <div>
            <IoLocationSharp className="icon" />
            <h2>Adres:</h2>
            <p>31-222 Kraków, Polska</p>
          </div>
        </div>
        <div className="form">
          <MyForm />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 100vh;
  @media screen and (max-width: 800px) {
    margin-top: -20vh;
  }
  .contactContainer {
    margin: 30vh auto 0;
    width: 80vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 800px) {
      width: 100vw;
      flex-direction: column;
    }
    .phoneAndMail {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      div {
        width: 65%;
        height: 20vh;
        margin: 2vh auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: #111;
        border-radius: 10px;
        color: white;
        padding: 10px;
        font-size: 1.2rem;
        border: 1px solid white;

        .icon {
          font-size: 1.6rem;
          color: rgb(197, 103, 40);
        }
      }
      @media screen and (max-width: 800px) {
        width: 100vw;
        flex-direction: row;
        flex-wrap: wrap;
        div {
          width: 80%;
          padding: 15px;
          font-size: 1.3rem;
          flex-direction: row;
          height: auto;
          justify-content: center;
          h2 {
            display: none;
          }
          .icon {
            font-size: 1.2rem;
            margin-right: 20px;
          }
        }
      }
    }
    .form {
      width: 50%;
      margin-right: 5vw;
      @media screen and (max-width: 800px) {
        width: 100vw;
        margin-right: 0;
        margin-top: 10vh;
      }
    }
  }
`;
export default Contact;
