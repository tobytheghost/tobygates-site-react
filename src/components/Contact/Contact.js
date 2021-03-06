import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

import "./Contact.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState();
  const [formMessage, setFormMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
    setFormMessage("");
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
    setFormMessage("");
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
    setFormMessage("");
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      axios({
        method: "POST",
        url: "/api/send.php",
        data: { name: name, email: email, message: message },
      }).then((response) => {
        if (response.data.status === "success") {
          setMessageSent(true);
          setFormMessage("Message Sent!");
          resetForm();
        } else {
          setMessageSent(false);
          setFormMessage("Message failed to Send.");
        }
      });
    } else {
      setFormMessage("Please fill out all of the fields.");
    }
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
    <section className="section contact">
      <VisibilitySensor partialVisibility onChange={handleOnChange}>
        {() => (
          <div className="section__container">
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
                  className="section__title contact__title"
                >
                  Contact
                </h2>
              )}
            </Spring>
            <div className="section__row section__row--align-top">
              {/* <div className="section__column">
            <div className="section__subtitle">
              <h3>Contact me directly...</h3>
            </div>
          </div> */}
              <div className="section__column section__column--full">
                <Spring
                  delay={450}
                  to={{
                    opacity: entered ? 1 : 0,
                    transform: entered ? "translateY(0)" : "translateY(100px)",
                  }}
                >
                  {(props) => (
                    <div style={{ ...props }} className="section__subtitle">
                      <p>
                        Want to get in touch? Contact me using the form below:
                      </p>
                    </div>
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
                    <div style={{ ...props }} className="section__content">
                      <div
                        className={
                          "section__alert " +
                          (formMessage === ""
                            ? "section__alert--hidden "
                            : "") +
                          (messageSent ? "" : "section__alert--red ")
                        }
                      >
                        {formMessage}
                      </div>
                      {!messageSent ? (
                        <form
                          id="contact-form"
                          onSubmit={(e) => {
                            handleSubmit(e);
                          }}
                          method="POST"
                        >
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={name}
                              onChange={(e) => {
                                onNameChange(e);
                              }}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              aria-describedby="emailHelp"
                              value={email}
                              onChange={(e) => {
                                onEmailChange(e);
                              }}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                              className="form-control"
                              rows="5"
                              value={message}
                              onChange={(e) => {
                                onMessageChange(e);
                              }}
                              required
                            ></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </form>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                </Spring>
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </section>
  );
}

export default Contact;
