import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class DrawerItem extends React.Component {
  render() {
    return (
      <ListItem
        button
        style={
          this.props.activePage === this.props.page
            ? {
                backgroundColor: "rgba(0, 0, 0, 0.125)"
              }
            : {}
        }
        onClick={() => this.props.history.push(this.props.page)}
      >
        <ListItemText
          style={
            this.props.activePage === this.props.page
              ? {
                  fontWeight: "bold"
                }
              : {}
          }
          primary={this.props.pageName}
        />
      </ListItem>
    );
  }
}

const mapStateToProps = state => {
  return {
    activePage: state.router.location.pathname
  };
};

export default connect(mapStateToProps)(withRouter(DrawerItem));
