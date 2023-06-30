import React, { useContext } from "react";
import { Box, TextField, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useRef } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import PushPinIcon from "@mui/icons-material/PushPin";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BrushIcon from "@mui/icons-material/Brush";
import ImageIcon from "@mui/icons-material/Image";

import { DataContext } from "../../context/contentProvider";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 600px;
  border-radius: 8px;
  min-height: 20px;
  padding: 10px 15px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledIcon = styled(Box)`
  position: relative;
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });
  const { setNotes } = useContext(DataContext);

  const containerRef = useRef();

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "60px";
  };

  const clickAwayText = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "20px";
    setAddNote({ ...note, id: uuid() });
    if (addNote.heading || addNote.text) {
      setNotes((prevArr) => [addNote, ...prevArr]);
    }
  };

  const onTextChange = (e) => {
    let changedNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changedNote);
  };

  return (
    <ClickAwayListener onClickAway={clickAwayText}>
      <Container ref={containerRef}>
        {showTextField ? (
          <>
            <TextField
              placeholder="Title"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <Tooltip title="Pin Note" placement="bottom">
                    <StyledIcon>
                      <PushPinIcon
                        style={{ marginRight: 25 }}
                        fontSize="medium"
                      />
                    </StyledIcon>
                  </Tooltip>
                ),
              }}
              style={{ marginBottom: 10 }}
              onChange={(e) => onTextChange(e)}
              name="heading"
              value={addNote.heading}
            />
            <TextField
              placeholder="Take a Note"
              multiline
              maxRows={Infinity}
              variant="standard"
              InputProps={{ disableUnderline: true }}
              onClick={onTextAreaClick}
              onChange={(e) => onTextChange(e)}
              name="text"
              value={addNote.text}
            />
          </>
        ) : (
          <>
            <TextField
              placeholder="Take a Note"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <>
                    <Tooltip title="New List" placement="bottom">
                      <StyledIcon>
                        <CheckBoxIcon
                          style={{ marginRight: 25 }}
                          fontSize="medium"
                        />
                      </StyledIcon>
                    </Tooltip>
                    <Tooltip title="New Note with Drawing" placement="bottom">
                      <StyledIcon>
                        <BrushIcon
                          style={{ marginRight: 25 }}
                          fontSize="medium"
                        />
                      </StyledIcon>
                    </Tooltip>
                    <Tooltip title="New Note with Image" placement="bottom">
                      <StyledIcon>
                        <ImageIcon
                          style={{ marginRight: 20 }}
                          fontSize="medium"
                        />
                      </StyledIcon>
                    </Tooltip>
                  </>
                ),
              }}
              onClick={onTextAreaClick}
              name="text"
              value={addNote.text}
            />
          </>
        )}
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
