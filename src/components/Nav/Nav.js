import React from "react";

import "./Nav.scss";

function Nav() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="section nav section--no-padding-top section--no-padding-bottom">
      <div className="section__container">
        <ul className="nav__items">
          <li className="nav__item">
            <button className="nav__link" onClick={scrollToTop}>
              Home
            </button>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#about">
              About
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#mywork">
              My Work
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Nav;
