import { Card, CardActions, CardContent, Tooltip } from "@mui/material";
import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import RestoreFromTrashRoundedIcon from "@mui/icons-material/RestoreFromTrashRounded";
import { DataContext } from "../../context/contentProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.08);
  }
`;

const IconBox = styled(Box)`
  visibility: ${({ showIcons }) => (showIcons ? "visible" : "hidden")};
  margin-left: auto;
  margin-right: 5px;
  opacity: ${({ showIcons }) => (showIcons ? 0.8 : 0)};
  transition: visibility 0.5s ease, opacity 0.5s ease;
`;

const DeleteNote = ({ deletedNote }) => {
  const { setNotes, setDeletedNotes, deletedNotes } = useContext(DataContext);

  const restoreNote = (deletedNote) => {
    const updatedNotes = deletedNotes.filter(
      (data) => data.id !== deletedNote.id
    );
    setDeletedNotes(updatedNotes);
    setNotes((prevarr) => [deletedNote, ...prevarr]);
  };

  const deleteNotePermanently = (deletedNote) => {
    const updatedNotes = deletedNotes.filter(
      (data) => data.id !== deletedNote.id
    );
    setDeletedNotes(updatedNotes);
  };

  const [showIcons, setShowIcons] = useState(false);

  const handleMouseToggle = () => {
    setShowIcons((prevVal) => !prevVal);
  };

  return (
    <StyledCard
      onMouseEnter={handleMouseToggle}
      onMouseLeave={handleMouseToggle}
    >
      <CardContent>
        <Typography color="text.secondary">{deletedNote.heading}</Typography>
        <Typography variant="h5">{deletedNote.text}</Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Restore Note" placement="bottom">
          <IconBox showIcons={showIcons}>
            <RestoreFromTrashRoundedIcon
              fontSize="small"
              style={{ marginBottom: "10px" }}
              onClick={() => restoreNote(deletedNote)}
            />
          </IconBox>
        </Tooltip>
        <Tooltip title="Delete Permenantly" placement="bottom">
          <IconBox showIcons={showIcons}>
            <DeleteForeverRoundedIcon
              fontSize="small"
              style={{ marginBottom: "10px" }}
              onClick={() => deleteNotePermanently(deletedNote)}
            />
          </IconBox>
        </Tooltip>
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
