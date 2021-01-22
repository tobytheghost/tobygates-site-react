import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

import { Nav } from "../../components";

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
    <section className="header">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="header__content">
        <VisibilitySensor partialVisibility onChange={handleOnChange}>
          {() => (
            <>
              <Spring
                delay={300}
                to={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(100px)",
                }}
              >
                {(props) => (
                  <h1>
                    <span style={{ ...props }} className="header__title">
                      Hi, I'm
                      <span className="header__title--alternative">
                        {" "}
                        Toby Gates
                      </span>
                      .
                    </span>
                    <span style={{ ...props }} className="header__subtitle">
                      I'm a full-stack web developer.
                    </span>
                  </h1>
                )}
              </Spring>
              <Spring
                delay={450}
                to={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(100px)",
                }}
              >
                {(props) => (
                  <div style={{ ...props }} className="header__buttons">
                    <button
                      className="header__button"
                      onClick={scrollToSection}
                    >
                      My Work
                      <ArrowForwardIcon />
                    </button>
                  </div>
                )}
              </Spring>
            </>
          )}
        </VisibilitySensor>
      </div>
      <Nav />
    </section>
  );
}

export default Header;
