import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import ViewListIcon from "@mui/icons-material/ViewList";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  box-shadow: inset 0 -1px 0 0 #dadce0;
  height: 70px;
`;

const HeaderBar = ({ open, handleDrawer }) => {
  const logo =
    "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{ marginRight: "20px" }}
        >
          <Tooltip title="Main Menu" placement="bottom">
            <MenuIcon />
          </Tooltip>
        </IconButton>
        <img src={logo} alt={logo} style={{ width: "30px" }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          style={{ marginLeft: "20px", color: "black" }}
        >
          Google Keep Clone
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "45vw",
            height: "45px",
            margin: "auto",
          }}
        >
          <IconButton sx={{ p: "10px" }}>
            <MenuIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Your Notes" />
          <IconButton type="button" sx={{ p: "10px" }}>
            <SearchIcon />
          </IconButton>
        </Paper>
        <IconButton size="large" marginLeft="auto" marginRight="20px">
          <Tooltip title="Refresh" placement="bottom">
            <CloudDoneIcon />
          </Tooltip>
        </IconButton>
        <IconButton size="large" marginLeft="auto" marginRight="20px">
          <Tooltip title="View List" placement="bottom">
            <ViewListIcon />
          </Tooltip>
        </IconButton>
        <IconButton size="large" marginLeft="auto" marginRight="20px">
          <Tooltip title="Settings" placement="bottom">
            <SettingsIcon />
          </Tooltip>
        </IconButton>
        <IconButton size="large" marginLeft="auto" marginRight="20px">
          <Tooltip title="View Profile" placement="bottom">
            <AccountBoxIcon />
          </Tooltip>
        </IconButton>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
