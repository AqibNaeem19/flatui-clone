import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement((props) => {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      <div className={props.classes.boxContent}>
        <span className={props.classes.colorName}>{props.name}</span>
        <span>
          <DeleteIcon
            fontSize="small"
            className={props.classes.deleteIcon}
            onClick={props.handleClick}
          />
        </span>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
