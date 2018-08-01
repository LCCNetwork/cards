import React from "react";

import Redirector from "../components/Redirector.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Redirector redirectIf={"loggedOut"} redirectTo={"/login"} />
        <div
          style={{
            width: "100%",
            height: "100%",
            marginTop: "64px",
            minHeight: "calc(100vh - 64px)",
            display: "flex"
          }}
        >
          Dashboard
        </div>
      </div>
    );
  }
}

export default Dashboard;
