import React from "react";
import SpeedIcon from "@material-ui/icons/Speed";
import DevicesIcon from "@material-ui/icons/Devices";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import "./About.scss";

function About() {
  return (
    <section className="section about">
      <div className="section__container">
        <div className="section__title about__title">
          <h2>About</h2>
        </div>
        <div className="section__row">
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
        </div>
        <div className="section__row">
          <div className="section__column">
            <div className="about__image">
              <img src="https://picsum.photos/200" alt="Toby Gates" />
            </div>
            <div className="section__subtitle">
              <h3>Who am I?</h3>
            </div>
            <div className="section__content">
              <p>
                I'm a Full-Stack Developer currently working for{" "}
                <a href="https://www.fluidstudiosltd.com/" target="_blank">
                  Fluid Studios
                </a>{" "}
                in Hertfordshire, UK.
              </p>
              <p>
                I'm currently working on fast, responsive and secure web
                applications.
              </p>
              <p>
                <a href="#contact">Let's make something together!</a>
              </p>
            </div>
          </div>
          <div className="section__column"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
