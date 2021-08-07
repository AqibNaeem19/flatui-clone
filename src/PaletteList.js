import React, { Component } from "react";
import NavBar from "./NavBar";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import blue from "@material-ui/core/colors/blue";
import deepOrange from "@material-ui/core/colors/deepOrange";
import { CSSTransition, TransitionGroup } from "react-transition-group";

//import color from material-ui
const blueColor = blue[700];
const orangeColor = deepOrange[700];

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletePaletteId: "",
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
  }

  //Function is called from MiniPalette as props
  openDialog(id) {
    this.setState({
      openDeleteDialog: true,
      deletePaletteId: id,
    });
  }

  //Closes the confirmation Dialog
  closeDialog() {
    this.setState({
      openDeleteDialog: false,
      deletepaletteId: "",
    });
  }

  //prop function from App Component
  handleDelete() {
    this.props.deletePalette(this.state.deletePaletteId);
    //close Confirmation dialog after delete.
    this.setState({
      openDeleteDialog: false,
    });
  }

  //Function is called from MiniPalette as props
  //Link to Palette/:id Route
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  

  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;


    return (
      <React.Fragment>
        {/* Dispalys NavBar */}
        <nav className={classes.Logo}>
          {/* dont display slider and color format */}
          <NavBar display={false} newPaletteForm={true} />
        </nav>

        {/* Renders MiniPalette Component */}
        <div className={classes.root}>
          <div className={classes.container}>
            <TransitionGroup className={classes.palettes}>
              {palettes.map((palette) => (
                <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                  <MiniPalette
                    {...palette}
                    key={palette.id}
                    id={palette.id}
                    goToPalette={this.goToPalette}
                    openDialog={this.openDialog}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>

          {/* Display Deletion Confirmation Dialog */}
          <Dialog
            open={openDeleteDialog}
            aria-labelledBy="delete-dialog-title"
            onClose={this.closeDialog}
          >
            <DialogTitle id="delete-dialog-title">
              Really want to delete palette
            </DialogTitle>
            <List>
              {/* First List Item */}
              <ListItem button onClick={this.handleDelete}>
                <ListItemAvatar>
                  <Avatar
                    style={{ backgroundColor: blueColor, color: "white" }}
                  >
                    <DoneOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>Delete</ListItemText>
              </ListItem>

              {/* Second List Item */}
              <ListItem button onClick={this.closeDialog}>
                <ListItemAvatar>
                  <Avatar
                    style={{ backgroundColor: orangeColor, color: "white" }}
                  >
                    <ClearOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>Cancel</ListItemText>
              </ListItem>
            </List>
          </Dialog>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PaletteList);
