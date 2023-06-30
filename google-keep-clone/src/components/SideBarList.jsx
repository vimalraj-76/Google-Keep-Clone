import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArchiveIcon from "@mui/icons-material/Archive";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const SideBarList = ({ open, setOpen }) => {
  const navList = [
    { id: 1, name: "Notes", icon: <LightbulbIcon />, route: "/" },
    {
      id: 2,
      name: "Reminders",
      icon: <NotificationsActiveIcon />,
      route: "/reminders",
    },
    { id: 3, name: "Edit Labels", icon: <EditIcon />, route: "/labels" },
    { id: 4, name: "Archive", icon: <ArchiveIcon />, route: "/archive" },
    { id: 5, name: "Trash", icon: <DeleteOutlineIcon />, route: "/delete" },
  ];

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <List>
      {navList.map((list) => (
        <ListItem key={list.id}>
          <ListItemButton
            component={Link}
            to={list.route}
            sx={{
              minHeight: 10,
              justifyContent: open ? "initial" : "center",
              px: 1,
              "&:hover": {
                backgroundColor: "#f7c231",
              },
              borderRadius: "0 25px 25px 0",
            }}
          >
            {open ? (
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
                onMouseUp={handleDrawerToggle}
              >
                {list.icon}
              </ListItemIcon>
            ) : (
              <Tooltip title={list.name} placement="right">
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  onMouseUp={handleDrawerToggle}
                >
                  {list.icon}
                </ListItemIcon>
              </Tooltip>
            )}
            <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBarList;
