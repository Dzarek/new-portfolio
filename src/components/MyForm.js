import React, { Component } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import Cookie from "./CookiePage";
import { Link } from "react-scroll";
import { IoCloseCircle } from "react-icons/io5";

class MyForm extends Component {
  state = {
    status: "",
    cookieVisible: false,
  };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bluxqcj",
        "template_rxmr3mj",
        e.target,
        "user_hMGLIzZtMljfB9Ssj5uYj"
      )
      .then(
        () => {
          e.target.reset();
          this.setState({ status: "SUCCESS" });
        },
        () => {
          this.setState({ status: "ERROR" });
        }
      );
  };
  render() {
    const { status } = this.state;
    return (
      <>
        <Wrapper onSubmit={this.sendEmail}>
          <h1>
            Napisz do mnie! <br /> Jestem zawsze otwarty na nowe projekty.
          </h1>
          <div className="inputContainer">
            <input
              type="text"
              name="name"
              placeholder="Imię i nazwisko"
              required
            />
            <input type="email" name="email" placeholder="E-mail" required />
          </div>
          <br />
          <textarea
            placeholder="Twoja wiadomość..."
            name="message"
            required
          ></textarea>
          <div className="labelCookieContainer">
            <label className="labelCheck" htmlFor="accept">
              <p>
                <input type="checkbox" id="accept" name="accept" required />
                Wyrażam zgodę na przetwarzanie danych osobowych w celu
                odpowiedzi na mojego e-maila.
              </p>
            </label>
            <Link
              onClick={() => this.setState({ cookieVisible: true })}
              to="cookie"
              smooth={true}
              duration={1000}
              className="cookieLink"
            >
              (Polityka Prywatności)
            </Link>
          </div>
          {status === "SUCCESS" ? (
            <p style={{ fontSize: "30px" }}>Wiadomość wysłana! </p>
          ) : (
            <button>Wyślij</button>
          )}
          {status === "ERROR" && (
            <p style={{ fontSize: "30px" }}>ups... coś poszło nie tak!</p>
          )}
        </Wrapper>
        {this.state.cookieVisible && (
          <WrapperModal id="cookie">
            <button
              className="btnCloseCookie"
              onClick={() => this.setState({ cookieVisible: false })}
            >
              <IoCloseCircle />
            </button>
            <Cookie />
          </WrapperModal>
        )}
      </>
    );
  }
}
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  height: 66vh;
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    height: auto;
  }
  h1 {
    text-align: center;
    margin-bottom: 5vh;
    @media screen and (max-width: 800px) {
      font-size: 1.7rem;
    }
  }
  .inputContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      border-radius: 10px;
      width: 45%;
      padding: 10px 20px;
      font-size: 1.3rem;
      background: #111;
      border: 1px solid white;
      color: white;
      font-family: "Mirza", sans-serif;
      @media screen and (max-width: 800px) {
        font-size: 1.2rem;
        width: 47%;
        padding: 8px 10px;
      }
    }
  }
  textarea {
    width: 100%;
    min-height: 25vh;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 1.3rem;
    background: #111;
    border: 1px solid white;
    color: white;
    font-family: "Mirza", sans-serif;
    @media screen and (max-width: 800px) {
      font-size: 1.2rem;
      padding: 8px 10px;
      min-height: 30vh;
    }
  }
  .labelCookieContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    label {
      margin: 3vh auto 0;
      font-size: 1.2rem;
      @media (orientation: portrait) and (max-width: 800px) {
        font-size: 1rem;
      }
      input {
        margin-right: 10px;
      }
    }
    .cookieLink {
      color: rgb(197, 103, 40);
      cursor: pointer;
    }
  }
  button {
    width: 30%;
    font-size: 1.1rem;
    padding: 10px 0;
    background: transparent;
    color: white;
    letter-spacing: 1px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
    border: 2px solid rgb(197, 103, 40);
    margin-top: 3vh;
    :hover {
      background: rgb(197, 103, 40);
    }
    @media screen and (max-width: 800px) {
      width: 50%;
      background: rgb(197, 103, 40);
    }
  }
`;
const WrapperModal = styled.div`
  width: 80vw;
  position: absolute;
  top: 120vh;
  left: 0;
  background: #000;
  background: rgb(9, 8, 20);
  background: rgb(23, 22, 36);

  color: white;
  padding: 20px;
  @media screen and (max-width: 800px) {
    width: 100vw;
    top: 150vh;
    padding-top: 10vh;
  }
  .btnCloseCookie {
    position: absolute;
    top: 5%;
    right: 10%;
    color: white;
    font-size: 3rem;
    background: transparent;
    border: none;
    transition: 0.4s;
    cursor: pointer;
    :hover {
      transform: scale(1.2);
    }
    @media screen and (max-width: 800px) {
      top: 10px;
      right: 50%;
      transform: translateX(50%);
    }
  }
`;
export default MyForm;
