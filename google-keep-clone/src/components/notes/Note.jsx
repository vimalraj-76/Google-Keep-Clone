import { Card, CardActions, CardContent, Tooltip } from "@mui/material";
import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AddAlertIcon from "@mui/icons-material/AddAlert";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PaletteIcon from "@mui/icons-material/Palette";
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";

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

const Note = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prevarr) => [note, ...prevarr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeletedNotes((prevarr) => [note, ...prevarr]);
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
        <Typography color="text.secondary">{note.heading}</Typography>
        <Typography variant="h5">{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Remind Me" placement="bottom">
          <IconBox showIcons={showIcons} data-show-icons={showIcons}>
            <AddAlertIcon
              fontSize="small"
              style={{ marginBottom: "10px", marginLeft: "auto" }}
            />
          </IconBox>
        </Tooltip>
        <Tooltip title="Add Person" placement="bottom">
          <IconBox showIcons={showIcons} data-show-icons={showIcons}>
            <PersonAddAlt1Icon
              fontSize="small"
              style={{ marginBottom: "10px" }}
            />
          </IconBox>
        </Tooltip>
        <Tooltip title="Palette" placement="bottom">
          <IconBox showIcons={showIcons} data-show-icons={showIcons}>
            <PaletteIcon fontSize="small" style={{ marginBottom: "10px" }} />
          </IconBox>
        </Tooltip>
        <Tooltip title="Add Image" placement="bottom">
          <IconBox showIcons={showIcons} data-show-icons={showIcons}>
            <ImageIcon fontSize="small" style={{ marginBottom: "10px" }} />
          </IconBox>
        </Tooltip>
        <Tooltip title="Archive" placement="bottom">
          <IconBox showIcons={showIcons} data-show-icons={showIcons}>
            <ArchiveIcon
              fontSize="small"
              style={{ marginBottom: "10px" }}
              onClick={() => archiveNote(note)}
            />
          </IconBox>
        </Tooltip>
        <Tooltip title="Delete" placement="bottom">
          <IconBox showIcons={showIcons} data-show-icons={showIcons}>
            <DeleteIcon
              fontSize="small"
              style={{ marginBottom: "10px" }}
              onClick={() => deleteNote(note)}
            />
          </IconBox>
        </Tooltip>
      </CardActions>
    </StyledCard>
  );
};

export default Note;
