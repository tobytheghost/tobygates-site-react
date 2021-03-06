import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

import SpeedIcon from "@material-ui/icons/Speed";
import DevicesIcon from "@material-ui/icons/Devices";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import StorageIcon from "@material-ui/icons/Storage";
import LanguageIcon from "@material-ui/icons/Language";
import { Card } from "@material-ui/core";

import "./About.scss";

function About() {
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
    <section className="section about">
      <VisibilitySensor partialVisibility onChange={handleOnChange}>
        {() => {
          return (
            <article className="section__container">
              <Spring
                delay={300}
                to={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(100px)",
                }}
              >
                {(props) => (
                  <h2
                    style={{ ...props }}
                    className="section__title about__title"
                  >
                    About
                  </h2>
                )}
              </Spring>
              <div className="section__row section__row--align-top">
                <Spring
                  delay={450}
                  to={{
                    opacity: entered ? 1 : 0,
                    transform: entered ? "translateX(0)" : "translateX(-100px)",
                  }}
                >
                  {(props) => (
                    <div style={{ ...props }} className="section__column">
                      <div className="section__subtitle">
                        <h3>Who am I?</h3>
                      </div>
                      <figure className="about__image">
                        <img
                          src="../../assets/img/toby-gates.png"
                          alt="Toby Gates"
                        />
                      </figure>
                      <div className="section__content section__content--large">
                        <p>
                          I'm a Full-Stack Developer currently working for{" "}
                          <a
                            href="https://www.fluidstudiosltd.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Fluid Studios
                          </a>{" "}
                          in Hertfordshire, UK.
                        </p>
                        <p>
                          I'm currently working on fast, responsive and secure
                          web applications and supporting our legacy clients.
                        </p>
                        <p>
                          <Link className="cta" to="contact" smooth={true}>
                            Let's make something together!
                          </Link>
                        </p>
                      </div>
                    </div>
                  )}
                </Spring>
                <Spring
                  delay={450}
                  to={{
                    opacity: entered ? 1 : 0,
                    transform: entered ? "translateX(0)" : "translateX(100px)",
                  }}
                >
                  {(props) => (
                    <aside style={{ ...props }} className="section__column">
                      <div className="section__subtitle">
                        <h3>What do I do?</h3>
                      </div>
                      <div className="section__cards">
                        <Card>
                          <CodeIcon />
                          <h4>HTML5 / CSS3 / JS</h4>
                          <p>
                            Fast and dynamic web pages and applications using
                            the latest frameworks.
                          </p>
                        </Card>
                        <Card>
                          <StorageIcon />
                          <h4>Back-end Development</h4>
                          <p>
                            Work with powerful back-end REST Api services and
                            CMS systems.
                          </p>
                        </Card>
                        <Card>
                          <LanguageIcon />
                          <h4>Support & Hosting</h4>
                          <p>
                            Provide support to our legacy clients and host sites
                            on our cloud-based hosting services.
                          </p>
                        </Card>
                        <Card>
                          <GitHubIcon />
                          <h4>Git Version Control</h4>
                          <p>
                            Keep web projects up-to-date and synchronised for
                            better cleaner development.
                          </p>
                        </Card>
                      </div>
                    </aside>
                  )}
                </Spring>
              </div>
              <Spring
                delay={600}
                to={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(100px)",
                }}
              >
                {(props) => (
                  <div style={{ ...props }} className="section__row">
                    <div className="section__column section__column--full">
                      <ul className="about__widgets">
                        <li className="about__widget">
                          <div className="about__widget-icon">
                            <SpeedIcon />
                          </div>
                          <div className="about__widget-title">Fast</div>
                          <div className="about__widget-info">
                            Focusing on fast load times and a smooth client
                            interaction.
                          </div>
                        </li>
                        <li className="about__widget">
                          <div className="about__widget-icon">
                            <DevicesIcon />
                          </div>
                          <div className="about__widget-title">Responsive</div>
                          <div className="about__widget-info">
                            Building sites that work responsively on devices
                            both big and small.
                          </div>
                        </li>
                        <li className="about__widget">
                          <div className="about__widget-icon">
                            <EmojiObjectsIcon />
                          </div>
                          <div className="about__widget-title">Intuitive</div>
                          <div className="about__widget-info">
                            Developing UX/UI that's easy to use and understand.
                          </div>
                        </li>
                        <li className="about__widget">
                          <div className="about__widget-icon">
                            <FlashOnIcon />
                          </div>
                          <div className="about__widget-title">Dynamic</div>
                          <div className="about__widget-info">
                            Putting extra power into your website. I love making
                            pages come to life.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Spring>
            </article>
          );
        }}
      </VisibilitySensor>
    </section>
  );
}

export default About;
