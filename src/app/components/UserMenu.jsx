import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";

import Avatar from "@material-ui/core/Avatar";

class UserMenu extends React.Component {
  render() {
    return isEmpty(this.props.profile) ? null : (
      <Avatar
        style={{
          marginLeft: "auto"
        }}
        alt={this.props.profile.displayName}
        src={this.props.profile.photoURL}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);
