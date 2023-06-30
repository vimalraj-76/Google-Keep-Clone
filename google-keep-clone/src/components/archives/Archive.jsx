import { Card, CardActions, CardContent, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import UnarchiveRoundedIcon from "@mui/icons-material/UnarchiveRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
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

const Archive = ({ archive }) => {
  const { setNotes, archiveNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  const unArchiveNote = (archive) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== archive.id);
    setArchiveNotes(updatedNotes);
    setNotes((prevarr) => [archive, ...prevarr]);
  };

  const deleteNote = (archive) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== archive.id);
    setArchiveNotes(updatedNotes);
    setDeletedNotes((prevarr) => [archive, ...prevarr]);
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
        <Typography color="text.secondary">{archive.heading}</Typography>
        <Typography variant="h5">{archive.text}</Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Unarchive" placement="bottom">
          <IconBox showIcons={showIcons}>
            <UnarchiveRoundedIcon
              fontSize="small"
              style={{ marginBottom: "10px" }}
              onClick={() => unArchiveNote(archive)}
            />
          </IconBox>
        </Tooltip>
        <Tooltip title="Delete" placement="bottom">
          <IconBox showIcons={showIcons}>
            <DeleteIcon
              fontSize="small"
              style={{ marginBottom: "10px" }}
              onClick={() => deleteNote(archive)}
            />
          </IconBox>
        </Tooltip>
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
