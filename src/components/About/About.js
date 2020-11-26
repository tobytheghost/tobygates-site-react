import React from "react";

import "./About.scss";

function About() {
  return (
    <section className="section about">
      <div className="section__container">
        <div className="section__title about__title">
          <h2>About</h2>
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
                <a href="#!">Fluid Studios</a> in Baldock, Hertfordshire.
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
