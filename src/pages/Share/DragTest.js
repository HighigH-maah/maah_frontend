import React from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../../components/Drag/Container";
import ByBottomDragContainer from "../../components/ShareStyle/ByBottomDragContainer";

function DragTest(props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ByBottomDragContainer />
    </DndProvider>
  );
}

export default DragTest;
