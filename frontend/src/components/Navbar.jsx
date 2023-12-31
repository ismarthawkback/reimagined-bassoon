import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Stack } from "@mui/material";
import SideDrawer from "./navbar-components/SideDrawer";
import { useState, useContext } from "react";
import authContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./navbar-components/ThemeToggle";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user, logout } = useContext(authContext);
  const navigate = useNavigate();

  const setDrawerState = (open) => {
    setDrawerOpen(open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ marginBottom: 2 }}>
        <Toolbar>
          {user !== null && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <img
            src="/cdot_logo_half.png"
            style={{
              height: "40px",
              width: "35px",
              marginRight: "10px",
              objectFit: "contain",
            }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CDOT VoIP
          </Typography>

          <Stack direction="row" sx={{ alignItems: "center" }}>
            {user === null ? (
              <>
                <Typography variant="body1">Dark Mode</Typography>
                <ThemeToggle />
              </>
            ) : (
              <>
                <Typography variant="body1">Hello, {user.username}</Typography>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle fontSize="large" />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={async () => {
                      await logout();
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <SideDrawer drawerOpen={drawerOpen} setDrawerState={setDrawerState} />
    </Box>
  );
}
