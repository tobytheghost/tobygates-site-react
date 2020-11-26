import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

import "./Footer.scss";

function Footer() {
  return (
    <section className="section footer">
      <div className="footer__links">
        <ul className="footer__items">
          <li className="footer__item">
            <a href="linkedin">
              <LinkedInIcon />
            </a>
          </li>
          <li className="footer__item">
            <a href="github">
              <GitHubIcon />
            </a>
          </li>
          <li className="footer__item">
            <a href="facebook">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__copy">
        Website Design & Build - Toby Gates - {new Date().getFullYear()}
      </div>
    </section>
  );
}

export default Footer;
