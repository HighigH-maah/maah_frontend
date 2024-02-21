import React from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function DragTest(props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Bucket>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Bucket>
        <Box></Box>
      </div>
    </DndProvider>
  );
}

export default DragTest;

function Box() {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: "BOX",
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
      11111
      {/* The drag ref marks this node as being the "pick-up" node */}
      <div role="Handle" ref={drag} />
    </div>
  );
}

function Bucket() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "BOX",
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      role={"Dustbin"}
      style={{ backgroundColor: isOver ? "red" : "white" }}
    >
      {canDrop ? "Release to drop" : "Drag a box here"}
    </div>
  );
}
