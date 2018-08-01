import React from "react";
import Redirector from "../components/Redirector.jsx";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { withRouter } from "react-router-dom";
import Loader from "../components/Loader.jsx";

class Logout extends React.Component {
  componentDidMount() {
    this.props.firebase
      .auth()
      .signOut()
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div>
        <Redirector redirectIf={"loggedOut"} redirectTo={"/"} />
        <Loader pastDelay={true} />
      </div>
    );
  }
}

export default firebaseConnect()(withRouter(Logout));
