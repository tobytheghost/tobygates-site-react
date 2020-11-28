import React, { useState } from "react";
import { Link, Events } from "react-scroll";

import "./Nav.scss";

function Nav() {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  const [menuActive, setMenuActive] = useState(false);

  Events.scrollEvent.register("begin", function (to, element) {
    setMenuActive(false);
  });

  return (
    <section className={"nav " + (menuActive ? "nav--active" : "")}>
      <div className="nav__container">
        <ul className="nav__items">
          {/* <li className="nav__item">
            <button
              className="nav__link"
              onClick={() => {
                scrollToTop();
                setMenuActive(false);
              }}
            >
              Home
            </button>
          </li> */}
          <li className="nav__item">
            <Link className="nav__link" to="about" smooth={true}>
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="technologies" smooth={true}>
              My Skills
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="contact" smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav__icon">
        <button
          className="nav__button"
          onClick={() =>
            menuActive ? setMenuActive(false) : setMenuActive(true)
          }
        >
          <span></span>
        </button>
      </div>
    </section>
  );
}

export default Nav;
