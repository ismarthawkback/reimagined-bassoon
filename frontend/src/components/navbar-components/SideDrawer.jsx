import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StorageIcon from "@mui/icons-material/Storage";
import HomeIcon from '@mui/icons-material/Home';
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function SideDrawer({drawerOpen, setDrawerState}) {
  const state = drawerOpen;
  const navigate = useNavigate()
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open)
  };

  return (
    <div>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <CloseIcon />
                </IconButton>
                <ListItemText primary="Close Menu" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem
              disablePadding
              sx={{
                marginTop: 3,
              }}
            >
              <ListItemButton onClick={() => navigate('/')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
            >
              <ListItemButton onClick={() => navigate('database')}>
                <ListItemIcon>
                  <StorageIcon />
                </ListItemIcon>
                <ListItemText primary="Database" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <Stack direction={"row"}>
                <ThemeToggle />
                <ListItemText primary="Dark Mode" />
              </Stack>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
