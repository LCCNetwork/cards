import React from "react";
import Redirector from "../components/Redirector.jsx";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Redirector redirectIf={"loggedIn"} redirectTo={"/"} />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <button
            onClick={() =>
              this.props.firebase.login({ provider: "google", type: "popup" })
            }
          >
            Login With Google
          </button>
          <div>
            <h2>Auth</h2>
            {!isLoaded(this.props.auth) ? (
              <span>Loading...</span>
            ) : isEmpty(this.props.auth) ? (
              <span>Not Authed</span>
            ) : (
              <pre>{this.props.auth.displayName}</pre>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(withRouter(Login));
