import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ImGithub } from "react-icons/im";
import { FaShareSquare } from "react-icons/fa";

const SingleProjectEn = ({ items }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {items.map((item) => {
        const { title, img, id, info, technology, githubLink, siteLink } = item;
        return (
          <div data-aos="fade-down" key={id} className="singleProject">
            <img src={img} alt={title} />
            <div className="description">
              <h3 className="titlePortfolio">{title}</h3>
              <p className="info">{info}</p>
              <div className="technology">
                {technology.map((item) => {
                  return <h4>{item}</h4>;
                })}
              </div>
              <div className="seeProject">
                <a href={githubLink}>
                  <ImGithub />
                </a>
                <a href={siteLink}>
                  <FaShareSquare />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleProjectEn;
