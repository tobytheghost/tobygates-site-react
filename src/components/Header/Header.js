import React from "react";
import { scroller } from "react-scroll";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "./Header.scss";
import "./Stars.scss";

function Header() {
  const scrollToSection = () => {
    scroller.scrollTo("main", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <section className="header">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="header__content">
        <div className="header__title">
          Hi, I'm
          <span className="header__title--alternative"> Toby Gates</span>.
        </div>
        <div className="header__subtitle">I'm a full-stack web developer.</div>
        <div className="header__buttons">
          <button className="header__button" onClick={scrollToSection}>
            My Work
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
