import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

import DeleteNote from "./DeleteNote";
import { DataContext } from "../../context/contentProvider";
import EmptyTrash from "./EmptyTrash";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deletedNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ flexGrow: 1, p: 3, width: "100%" }}>
        <DrawerHeader />
        {deletedNotes.length > 0 ? (
          <Grid style={{ marginTop: "25px" }} container>
            {deletedNotes.map((deletedNote) => {
              return (
                <Grid item>
                  <DeleteNote deletedNote={deletedNote} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <EmptyTrash />
        )}
      </Box>
    </Box>
  );
};

export default DeleteNotes;
