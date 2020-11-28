import React from "react";
import { Card } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);

function Technologies() {
  return (
    <section className="section technologies section--background-grey">
      <div className="section__container">
        <div className="section__title technologies__title">My Skills</div>
        <div className="section__cards section__cards--full">
          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "js-square"]}
                style={{ color: "#ff9800", fontSize: "4rem" }}
              />
            </div>
            <h4>Javascript (ES6)</h4>
          </Card>
          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "php"]}
                style={{ color: "#f48fb1", fontSize: "4rem" }}
              />
            </div>
            <h4>PHP</h4>
          </Card>
          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "wordpress"]}
                style={{ color: "#2196f3", fontSize: "4rem" }}
              />
            </div>
            <h4>WordPress</h4>
          </Card>
          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "sass"]}
                style={{ color: "#f48fb1", fontSize: "4rem" }}
              />
            </div>
            <h4>Sass (Scss)</h4>
          </Card>
          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "react"]}
                style={{ color: "#2196f3", fontSize: "4rem" }}
              />
            </div>
            <h4>React</h4>
          </Card>
          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "node-js"]}
                style={{ color: "#4caf50", fontSize: "4rem" }}
              />
            </div>
            <h4>Node.js</h4>
          </Card>

          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "git-alt"]}
                style={{ color: "#f44336", fontSize: "4rem" }}
              />
            </div>
            <h4>Git</h4>
          </Card>
          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "docker"]}
                style={{ color: "#2196f3", fontSize: "4rem" }}
              />
            </div>
            <h4>Docker</h4>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
