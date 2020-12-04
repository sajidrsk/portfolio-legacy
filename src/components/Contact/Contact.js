import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Contact.scss";

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const Input = withStyles({
  root: {
    margin: "1rem",
    width: "100%",
  },
})(TextField);

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const submitHandle = () => {
    alert("Mail Sent!");
  };

  return (
    <div id="contact" className="contact">
      <span className="head">contact</span>
      <p>Have a question or Want to work together?</p>
      <div>
        <form>
          <Input
            value={name}
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            value={message}
            label="Message"
            rows={4}
            multiline
            variant="outlined"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div data-aos="fade-right">
            <StyledButton onClick={submitHandle} variant="contained">
              Submit
            </StyledButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
