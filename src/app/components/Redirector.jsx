import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";

class Redirector extends React.Component {
  checkRedirect() {
    if (isLoaded(this.props.auth)) {
      if (this.props.redirectIf === "loggedOut") {
        if (isEmpty(this.props.auth)) {
          this.props.history.push(this.props.redirectTo);
        }
      } else if (this.props.redirectIf === "loggedIn") {
        if (!isEmpty(this.props.auth)) {
          this.props.history.push(this.props.redirectTo);
        }
      } else if (this.props.redirectIf === "notAuthorized") {
        if (isEmpty(this.props.auth)) {
          this.props.history.push(this.props.redirectTo);
        }
      }
    }
  }

  componentDidMount() {
    this.checkRedirect();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.checkRedirect();
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(withRouter(Redirector));
