import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: "",
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(
        ({ name, color }) =>
          name.toLowerCase() !== value.toLowerCase() &&
          color !== this.state.currentColor
      )
    );
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />

        <ValidatorForm
          onSubmit={this.handleSubmit}
          autoComplete="off"
          instantValidate={false}
        >
          <TextValidator
            value={newColorName}
            name="newColorName"
            placeholder="Color Name"
            onChange={this.handleChange}
            className={classes.colorNameInput}
            validators={["required", "isColorUnique"]}
            errorMessages={[
              "this field is required",
              "Color is already present",
            ]}
          />

          <Button
            variant="contained"
            color="primary"
            disabled={paletteIsFull}
            type="submit"
            className={classes.addColor}
            style={{ backgroundColor: paletteIsFull ? "gray" : currentColor }}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
