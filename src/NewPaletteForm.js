import React, { Component } from "react";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import styles from "./styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      colors: [],
    };

    this.addNewColor = this.addNewColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  // draggable box function
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: "",
    });
  }

  handleSubmit(newPalette) {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  deleteColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  }

  clearColors() {
    this.setState({ colors: [] });
  }

  addRandomColor() {
    const allColors = this.props.palettes.map((p) => p.colors).flat();
    let randomColor;
    let isDublicateColor = true;
    while (isDublicateColor) {
      let randomNumber = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[randomNumber];
      isDublicateColor = this.state.colors.some(
        (color) => color.name === randomColor.name
      );
    }
    this.setState({ colors: [...this.state.colors, randomColor] });
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        {/* This is the navbar component. handle Palette name validations and saving it */}
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clearColors}
                className={classes.button}
              >
                Clear Palette
              </Button>

              <Button
                disabled={paletteIsFull}
                variant="contained"
                color="primary"
                onClick={this.addRandomColor}
                className={classes.button}
              >
                Random Color
              </Button>
            </div>

            <ColorPickerForm
              paletteIsFull={paletteIsFull}
              addNewColor={this.addNewColor}
              colors={this.state.colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          {colors.length < 1 && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "600px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>Select Colors to Make your Palette</h1>
            </div>
          )}
          {colors.length >= 1 && (
            <DraggableColorList
              onSortEnd={this.onSortEnd}
              colors={this.state.colors}
              deleteColor={this.deleteColor}
              axis="xy"
              distance={20}
            />
          )}
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
