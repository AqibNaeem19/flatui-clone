import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/FooterStyles";

function Footer(props) {
  const { creater, emoji, paletteName, classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.paletteName}>
        {paletteName} {emoji}
      </div>
      <div className={classes.paletteCreater}>{creater}</div>
    </footer>
  );
}

export default withStyles(styles)(Footer);
