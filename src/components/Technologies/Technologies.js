import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./Technologies.scss";

library.add(fas);
library.add(fab);

function Technologies() {
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
    <section className="section technologies section--background-grey">
      <VisibilitySensor partialVisibility onChange={handleOnChange}>
        {() => (
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
                  className="section__title technologies__title"
                >
                  My Skills
                </h2>
              )}
            </Spring>
            <div className="section__cards section__cards--full">
              <Spring
                delay={450}
                to={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(100px)",
                }}
              >
                {(props) => (
                  <Card style={{ ...props }} className="align-center">
                    <div className="section__icons">
                      <FontAwesomeIcon
                        icon={["fab", "php"]}
                        style={{ color: "#f48fb1", fontSize: "4rem" }}
                      />
                    </div>
                    <h3 className="skill__title">PHP</h3>
                  </Card>
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
                  <Card style={{ ...props }} className="skill align-center">
                    <div className="section__icons">
                      <FontAwesomeIcon
                        icon={["fab", "js-square"]}
                        style={{ color: "#ff9800", fontSize: "4rem" }}
                      />
                    </div>
                    <h3 className="skill__title">Javascript</h3>
                  </Card>
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
                  <Card style={{ ...props }} className="align-center">
                    <div className="section__icons">
                      <FontAwesomeIcon
                        icon={["fab", "wordpress"]}
                        style={{ color: "#2196f3", fontSize: "4rem" }}
                      />
                    </div>
                    <h3 className="skill__title">WordPress</h3>
                  </Card>
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
                  <Card style={{ ...props }} className="align-center">
                    <div className="section__icons">
                      <FontAwesomeIcon
                        icon={["fab", "sass"]}
                        style={{ color: "#f48fb1", fontSize: "4rem" }}
                      />
                    </div>
                    <h3 className="skill__title">Sass (Scss)</h3>
                  </Card>
                )}
              </Spring>
              <Spring
                delay={600}
                to={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(100px)",
                }}
              >
                {(props) => (
                  <Card style={{ ...props }} className="align-center">
                    <div className="section__icons">
                      <FontAwesomeIcon
                        icon={["fab", "html5"]}
                        style={{ color: "#ff9800", fontSize: "4rem" }}
                      />
                    </div>
                    <h3 className="skill__title">HTML5</h3>
                  </Card>
                )}
              </Spring>
              <Spring
                delay={600}
                to={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(100px)",
                }}
              >
                {(props) => (
                  <Card style={{ ...props }} className="align-center">
                    <div className="section__icons">
                      <FontAwesomeIcon
                        icon={["fab", "react"]}
                        style={{ color: "#2196f3", fontSize: "4rem" }}
                      />
                    </div>
                    <h3 className="skill__title">React</h3>
                  </Card>
                )}
              </Spring>
              <Spring
                delay={600}
                to={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(100px)",
                }}
              >
                {(props) => (
                  <Card style={{ ...props }} className="align-center">
                    <div className="section__icons">
                      <FontAwesomeIcon
                        icon={["fab", "git-alt"]}
                        style={{ color: "#f44336", fontSize: "4rem" }}
                      />
                    </div>
                    <h3 className="skill__title">Git</h3>
                  </Card>
                )}
              </Spring>
              <Spring
                delay={600}
                to={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(100px)",
                }}
              >
                {(props) => (
                  <Card style={{ ...props }} className="align-center">
                    <div className="section__icons">
                      <FontAwesomeIcon
                        icon={["fab", "docker"]}
                        style={{ color: "#2196f3", fontSize: "4rem" }}
                      />
                    </div>
                    <h3 className="skill__title">Docker</h3>
                  </Card>
                )}
              </Spring>
              {/* <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "node-js"]}
                style={{ color: "#4caf50", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">Node.js</h3>
          </Card> */}
            </div>
          </article>
        )}
      </VisibilitySensor>
    </section>
  );
}

export default Technologies;
