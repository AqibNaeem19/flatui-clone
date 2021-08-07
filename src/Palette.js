import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import Footer from "./footer";
import styles from "./styles/PaletteStyles";
import { withStyles } from "@material-ui/styles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 6,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  // Function to change state depending on slider value
  changeLevel(level) {
    this.setState({ level: level });
  }

  //function as a prop to NavBar
  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, creater, emoji, paletteName, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;

    let colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showLink={true}
      />
    ));

    return (
      <React.Fragment>
        <div className={classes.Palette}>
          <NavBar
            level={level}
            changeLevel={this.changeLevel}
            getColorFormat={this.changeFormat}
            display={true}
            slider={true}
          />

          <div className={classes.paletteColors}>{colorBoxes}</div>
        </div>
        <Footer creater={creater} emoji={emoji} paletteName={paletteName} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Palette);
