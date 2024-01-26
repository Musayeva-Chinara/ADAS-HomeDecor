import React from "react";
import About from "../../assets/companents/About/About";
import style from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className="container">
      <div className={style.aboutPage}>
        <ul className={style.aboutUl}>
          <li>Home</li>
          <li>About </li>
        </ul>
      </div>
      <About />
      <div className={style.aboutPage1}>
        <div>
          <h2>500+</h2>
          <p>PROJECTS</p>
        </div>
        <div>
          <h2>70+</h2>
          <p>PARTNERS</p>
        </div>
        <div>
          <h2>30K+</h2>
          <p>FOLLOWERS</p>
        </div>
        <div>
          <h2>25+</h2>
          <p>YEARS</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
