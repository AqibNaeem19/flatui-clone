import React, { Component } from "react";
import styles from "./styles/MinipaletteStyles";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

class Minipalette extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //Function to call parent function from PaletteList
  handleDelete(e) {
    e.stopPropagation();
    //Id is passed from PaletteList as a prop
    this.props.openDialog(this.props.id);
  }

  //Give Id to parent function of specified MiniPalette
  handleClick() {
    this.props.goToPalette(this.props.id);
  }

  

  render() {
    const { classes, paletteName, emoji, creater, colors } = this.props;
    let hideDeleteButton = false;
    //colors is array of objects with color and name keys.
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColorBox}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    ));

    if( ["material-ui-colors" , "flat-ui-colors-v1" , "flat-ui-colors-dutch" , "flat-ui-colors-american" , "flat-ui-colors-aussie" , "flat-ui-colors-british" ,"flat-ui-colors-spanish" , "flat-ui-colors-indian" , "flat-ui-colors-french"].includes(this.props.id) ){
      hideDeleteButton = false;
    }else{
      hideDeleteButton = true;
    }

    return (
      <div className={classes.root} onClick={this.handleClick}>
       {hideDeleteButton && <div className={classes.delete}> 
          <DeleteIcon
            fontSize="small"
            className={classes.deleteIcon}
            style={{ transition: "all 0.4s ease-in-out" }}
            onClick={this.handleDelete}
          />
          </div>
        }
        {/* Content of MiniPalette */}
        <h5 className={classes.creater}>{creater}</h5>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(Minipalette);
