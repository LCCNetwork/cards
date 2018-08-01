import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";

import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";

import { SET_DRAWER } from "../consts.js";
import DrawerItem from "./DrawerItem.jsx";

class DrawerMenu extends React.Component {
  render() {
    return isEmpty(this.props.profile) ? null : (
      <div>
        <IconButton
          style={{
            marginLeft: "-12px"
          }}
          color="inherit"
          aria-label="Menu"
          onClick={this.props.openDrawer}
        >
          <Icon>menu</Icon>
        </IconButton>
        <Drawer open={this.props.open} onClose={this.props.closeDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.closeDrawer}
            onKeyDown={this.props.closeDrawer}
          >
            <List>
              <DrawerItem pageName={"Dashboard"} page={"/"} />
              <DrawerItem pageName={"Events"} page={"/events"} />
              <DrawerItem pageName={"Payments"} page={"/payments"} />
              <Divider style={{ width: "250px" }} />
              <DrawerItem pageName={"Settings"} page={"/settings"} />
              <DrawerItem pageName={"Logout"} page={"/logout"} />
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.ui.drawer.open,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDrawer: () => {
      dispatch({
        type: SET_DRAWER,
        open: true
      });
    },
    closeDrawer: () => {
      dispatch({
        type: SET_DRAWER,
        open: false
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DrawerMenu));
