import React from "react";
import { IconButton as IconBTN } from "@material-ui/core";
import { LinkedIn, Instagram, GitHub, YouTube } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import "./Footer.scss";
import Container from "../UI/Container/Container";

const IconButton = withStyles({
  root: {
    margin: "1rem 2rem",
    // background: "white",
    color: " #f50057",
  },
})(IconBTN);

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <IconButton size="medium">
          <LinkedIn />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <GitHub />
        </IconButton>
        <IconButton>
          <YouTube />
        </IconButton>
      </Container>
    </footer>
  );
}

export default Footer;
