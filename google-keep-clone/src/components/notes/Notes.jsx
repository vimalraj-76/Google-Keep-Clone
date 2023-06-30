import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Form from "./Form";
import Note from "./Note";
import { DataContext } from "../../context/contentProvider";
import EmptyNotes from "./EmptyNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes, setNotes } = useContext(DataContext);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(notes, result.source.index, result.destination.index);

    setNotes(items);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ flexGrow: 1, p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Grid style={{ marginTop: "25px" }} container>
              {notes.map((note, index) => {
                const droppableId = `droppable-${note.id}`;
                return (
                  <Droppable key={note.id} droppableId={droppableId}>
                    {(provided, snapshot) => (
                      <Grid
                        item
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        <Draggable
                          key={note.id}
                          draggableId={note.id.toString()}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Note note={note} />
                            </div>
                          )}
                        </Draggable>
                        {provided.placeholder}
                      </Grid>
                    )}
                  </Droppable>
                );
              })}
            </Grid>
          </DragDropContext>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
