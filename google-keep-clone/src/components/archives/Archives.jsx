import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

import Archive from "./Archive";

import { DataContext } from "../../context/contentProvider";
import EmptyArchives from "./EmptyArchives";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = () => {
  const { archiveNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ flexGrow: 1, p: 3, width: "100%" }}>
        <DrawerHeader />
        {archiveNotes.length > 0 ? (
          <Grid style={{ marginTop: "25px" }} container>
            {archiveNotes.map((archive) => {
              return (
                <Grid item>
                  <Archive archive={archive} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <EmptyArchives />
        )}
      </Box>
    </Box>
  );
};

export default Archives;
