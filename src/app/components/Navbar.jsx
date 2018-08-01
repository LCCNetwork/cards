import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import UserMenu from "./UserMenu.jsx";
import DrawerMenu from "./DrawerMenu.jsx";

class Navbar extends React.Component {
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <DrawerMenu
            style={{
              marginRight: "12px"
            }}
          />
          <Typography type="title" color="inherit" className="flex">
            Team 4099
          </Typography>
          <UserMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
