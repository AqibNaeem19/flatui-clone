import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/NavBarStyles";
import Slider from "rc-slider";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import "rc-slider/assets/index.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false, //open refers to snackbar state
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState(
      {
        format: e.target.value,
        open: true,
      },
      () => this.props.getColorFormat(this.state.format)
    );
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const {
      level,
      changeLevel,
      display,
      slider,
      newPaletteForm,
      classes,
    } = this.props;

    return (
      <header className={classes.NavBar}>
        <div className={classes.Logo}>
          <Link to="/">
            <h1>Colors.io</h1>
          </Link>
        </div>

        {/* Displays Slider */}
        {display && slider && (
          <div className={classes.SliderContainer}>
            <div className={classes.Slider}>
              <Slider
                defaultValue={level}
                min={1}
                max={9}
                step={1}
                dots={true}
                onAfterChange={changeLevel}
              />
            </div>
            <span className={classes.SliderLevel}>
              Opacity: {`${level / 10}`}
            </span>
          </div>
        )}

        {/* Displays color format selector */}
        {display && (
          <div className={classes.FormatSelector}>
            <Select defaultValue="hex" onChange={this.handleFormatChange}>
              <MenuItem value="hex">HEX</MenuItem>
              <MenuItem value="rgb">RGB</MenuItem>
              <MenuItem value="rgba">RGBA</MenuItem>
              <MenuItem value="hsl">HSL</MenuItem>
            </Select>
          </div>
        )}

        {/* Shows link to new palette creater */}
        {newPaletteForm && (
          <div className={classes.NewPalette}>
            <Link to="/palette/new">
              <h3>Create New Palette</h3>
            </Link>
          </div>
        )}

        {/* Displays little pop-up message on color format change */}
        {display && (
          <Snackbar
            j
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={this.state.open}
            autoHideDuration={2000}
            message={
              <span id="message-id">
                Color Code changed to {this.state.format}
              </span>
            }
            ContentProps={{
              "aria-describedby": "message-id",
            }}
            onClose={this.closeSnackbar}
            action={[
              <IconButton
                onClick={this.closeSnackbar}
                color="inherit"
                key="close"
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        )}
      </header>
    );
  }
}

export default withStyles(styles)(NavBar);
