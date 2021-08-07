import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "paletteNameForm",
      newPaletteName: "",
      creater: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  showEmojiPicker() {
    this.setState({ stage: "emojiPickerForm" });
  }

  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
      creater: this.state.creater,
    };
    this.props.handleSubmit(newPalette);
    this.setState({ stage: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { stage, newPaletteName, creater } = this.state;
    const { hideForm, handleSubmit } = this.props;
    return (
      <React.Fragment>
        {/* emoji showing form */}
        <Dialog open={stage === "emojiPickerForm"} onClose={hideForm}>
          <Picker
            onSelect={this.savePalette}
            emojiTooltip="true"
            set="google"
            title="Pick a Palette Emoji"
          />
        </Dialog>
          {/* palette name form */}
        <Dialog
          open={stage === "paletteNameForm"}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">PaletteName</DialogTitle>
          {/* Form validator for unique values */}
          <ValidatorForm onSubmit={this.showEmojiPicker} autoComplete="off">
            <DialogContent>
              <DialogContentText>
                Please enter the name for your Color Palette, It should be
                Unique
              </DialogContentText>
                    {/* validating field for the palette name */}
              <TextValidator
                label="Color Palette Name"
                name="newPaletteName"
                value={newPaletteName}
                margin="normal"
                fullWidth
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Enter Color Palette Name",
                  "This Palette name is already in use",
                ]}
              />
              {/* validator field for the palette creater name */}
              <TextValidator
                label="Creater Name"
                name="creater"
                value={creater}
                margin="normal"
                fullWidth
                onChange={this.handleChange}
                validators={["required"]}
                errorMessages={["Enter Your Name"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default PaletteMetaForm;
