import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Error extends React.Component {
  render () {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "calc(100vh - 96px)",
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateColumns:
            "minmax(0, 40vw) minmax(1fr, 100vw) minmax(0, 40vw)",
          marginTop: "80px",
          marginBottom: "16px"
        }}
      >
        <div />
        <div>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="headline" component="h2">
                Error
              </Typography>
              <Typography component="p">

              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">HOME</Button>
            </CardActions>
          </Card>
        </div>
        <div />
      </div>
    )
  }
}