import React, { Component } from "react";
import styles from "./styles/ColorBoxStyles";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

class ColorBox extends Component {
  //Constructor
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
  }

  // Not binded because its called inside copyToClipBoard, which is binded
  changeCopyState() {
    this.setState({ copied: true }, () =>
      //enable copy overlay for just 1.5 seconds
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  }

  // Function to copy color code to clipboard
  copyToClipBoard() {
    //taking background prop from Palette and SinglePaletteList
    let { background } = this.props;
    const element = document.createElement("textarea");
    element.value = background;
    document.body.appendChild(element); //insert textarea into html body
    element.select();
    document.execCommand("copy"); //internal command to copy from text area
    document.body.removeChild(element); //remove after coping command
    this.changeCopyState();
  }

  render() {
    let { name, background, paletteId, id, showLink, classes } = this.props;
    let { copied } = this.state;

    return (
      <div style={{ background }} className={classes.colorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        />

        <div
          className={`${classes.copyMessage} ${copied && classes.showMessage}`}
        >
          <h1 className={classes.copyHeading}>Copied!!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>

        <div className={classes.boxContent}>
          <span className={classes.colorName}>{name}</span>
        </div>

        <button className={classes.copyButton} onClick={this.copyToClipBoard}>
          Copy
        </button>
        {/* Show link is prop to hide and show More butto on different routes */}
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={classes.moreShades}>More</span>
          </Link>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ColorBox);
