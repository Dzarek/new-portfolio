import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";
import styled from "styled-components";

class MyForm extends Component {
  state = {
    status: "",
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
        <label className="labelCheck" htmlFor="accept">
          <p>
            <input type="checkbox" id="accept" name="accept" required />
            Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi na
            mojego e-maila{" "}
            <span>
              {" "}
              <NavLink className="cookieLink" to="/cookie">
                (Polityka Prywatności)
              </NavLink>
            </span>
          </p>
        </label>
        {status === "SUCCESS" ? (
          <p style={{ fontSize: "30px" }}>Wiadomość wysłana! </p>
        ) : (
          <button>Wyślij</button>
        )}
        {status === "ERROR" && (
          <p style={{ fontSize: "30px" }}>ups... coś poszło nie tak!</p>
        )}
      </Wrapper>
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
  h1 {
    text-align: center;
    margin-bottom: 5vh;
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
  }
  label {
    margin: 3vh auto;
    font-size: 1.2rem;
    @media (orientation: portrait) and (max-width: 800px) {
      font-size: 1rem;
    }
    input {
      margin-right: 10px;
    }
    span a {
      color: rgb(197, 103, 40);
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
  }
`;

export default MyForm;
