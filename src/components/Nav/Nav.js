import React, { useState, useEffect } from "react";
import { Link, Events } from "react-scroll";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

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

  const [isVisible, setVisibility] = useState(false);
  const [entered, setEntered] = useState(false);

  const handleOnChange = (visibility) => {
    setVisibility(visibility);
  };
  useEffect(() => {
    if (isVisible) {
      setEntered(true);
    }
  }, [isVisible]);

  return (
    <section className={"nav " + (menuActive ? "nav--active" : "")}>
      <VisibilitySensor partialVisibility onChange={handleOnChange}>
        {() => (
          <nav className="nav__container">
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
              <Spring
                delay={300}
                to={{
                  opacity: entered && menuActive ? 1 : 0,
                  transform:
                    entered && menuActive
                      ? "translateY(0)"
                      : "translateY(100px)",
                }}
              >
                {(props) => (
                  <li style={{ ...props }} className="nav__item">
                    <Link className="nav__link" to="about" smooth={true}>
                      About
                    </Link>
                  </li>
                )}
              </Spring>
              <Spring
                delay={450}
                to={{
                  opacity: entered && menuActive ? 1 : 0,
                  transform:
                    entered && menuActive
                      ? "translateY(0)"
                      : "translateY(100px)",
                }}
              >
                {(props) => (
                  <li style={{ ...props }} className="nav__item">
                    <Link className="nav__link" to="technologies" smooth={true}>
                      My Skills
                    </Link>
                  </li>
                )}
              </Spring>
              <Spring
                delay={600}
                to={{
                  opacity: entered && menuActive ? 1 : 0,
                  transform:
                    entered && menuActive
                      ? "translateY(0)"
                      : "translateY(100px)",
                }}
              >
                {(props) => (
                  <li style={{ ...props }} className="nav__item">
                    <Link className="nav__link" to="contact" smooth={true}>
                      Contact
                    </Link>
                  </li>
                )}
              </Spring>
            </ul>
          </nav>
        )}
      </VisibilitySensor>
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
