import DraggableColorBox from "./DraggableColorBox";
import React from "react";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((c, i) => (
        <DraggableColorBox
          index={i}
          key={c.name}
          color={c.color}
          name={c.name}
          handleClick={() => deleteColor(c.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
