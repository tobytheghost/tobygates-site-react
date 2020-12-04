import React from "react";
// import SpeedIcon from "@material-ui/icons/Speed";
// import DevicesIcon from "@material-ui/icons/Devices";
// import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
// import FlashOnIcon from "@material-ui/icons/FlashOn";

import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import StorageIcon from "@material-ui/icons/Storage";
import LanguageIcon from "@material-ui/icons/Language";

import { Card } from "@material-ui/core";
import { Link } from "react-scroll";

import "./About.scss";

function About() {
  return (
    <section className="section about">
      <div className="section__container">
        <div className="section__title about__title">
          <h2>About</h2>
        </div>
        {/* <div className="section__row">
          <div className="section__column section__column--full">
            <ul className="about__widgets">
              <li className="about__widget">
                <div className="about__widget-icon">
                  <SpeedIcon />
                </div>
                <div className="about__widget-title">Fast</div>
                <div className="about__widget-info">
                  Fast load times and a smooth client interaction.
                </div>
              </li>
              <li className="about__widget">
                <div className="about__widget-icon">
                  <DevicesIcon />
                </div>
                <div className="about__widget-title">Responsive</div>
                <div className="about__widget-info">
                  Works responsively on all devices both big and small.
                </div>
              </li>
              <li className="about__widget">
                <div className="about__widget-icon">
                  <EmojiObjectsIcon />
                </div>
                <div className="about__widget-title">Intuitive</div>
                <div className="about__widget-info">
                  Easy to use and understand UX/UI.
                </div>
              </li>
              <li className="about__widget">
                <div className="about__widget-icon">
                  <FlashOnIcon />
                </div>
                <div className="about__widget-title">Dynamic</div>
                <div className="about__widget-info">
                  Putting extra power into your website. I love making pages
                  come to life.
                </div>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="section__row section__row--align-top">
          <div className="section__column">
            <div className="section__subtitle">
              <h3>Who am I?</h3>
            </div>
            <div className="about__image">
              <img src="../../assets/img/toby-gates.png" alt="Toby Gates" />
            </div>
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
                I'm currently working on fast, responsive and secure web
                applications and supporting our legacy clients.
              </p>
              <p>
                <Link className="cta" to="contact" smooth={true}>
                  Let's make something together!
                </Link>
              </p>
            </div>
          </div>
          <div className="section__column">
            <div className="section__subtitle">
              <h3>What do I do?</h3>
            </div>
            <div className="section__cards">
              <Card>
                <CodeIcon />
                <h4>HTML5 / CSS3 / JS</h4>
                <p>
                  Fast and dynamic web pages and applications using the latest
                  frameworks.
                </p>
              </Card>
              <Card>
                <StorageIcon />
                <h4>Back-end Development</h4>
                <p>
                  Work with powerful back-end REST Api services and CMS systems.
                </p>
              </Card>
              <Card>
                <LanguageIcon />
                <h4>Support & Hosting</h4>
                <p>
                  Provide support to our legacy clients and host sites on our
                  cloud-based hosting services.
                </p>
              </Card>
              <Card>
                <GitHubIcon />
                <h4>Git Version Control</h4>
                <p>
                  Keep web projects up-to-date and synchronised for better
                  cleaner development.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
