import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = props => {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CircularProgress size={120} thickness={2} />
      </div>
    );
  } else {
    return null;
  }
};

export default Loader;
