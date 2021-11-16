import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImEnter } from "react-icons/im";

import dorotaImg from "../images/9a.jpg";

const SingleProject = () => {
  return (
    <div className="singleProject">
      <img src={dorotaImg} alt="Dorota Szydełkuje" />
      <div className="description">
        <h3 className="titlePortfolio">Dorota Szydełkuje</h3>
        <p className="info">
          Strona internetowa stworzona dla osoby, która zajmuje się
          szydełkowaniem. Można tam zamówić produkty wykonane z włóczki takie
          jak: zabawki, pufy, koce itd.
        </p>
        <div className="technology">
          <h4>React</h4>
          <h4>Css</h4>
        </div>
        <div className="seeProject">
          <a href="https://www.dorotaszydelkuje.com/">
            <FaGithub />
          </a>
          <a href="https://www.dorotaszydelkuje.com/">
            <ImEnter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
