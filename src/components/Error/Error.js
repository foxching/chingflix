import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    margin: "auto",
    width: "50%",
    position: "absolute",
    top: "45%",
    left: "30%",
    transform: "translateY(-50%)",
    padding: "50px"
  }
});

const Error = props => {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Somethig Went Wrong! Please bear with us!
        </Typography>
      </Paper>
    </div>
  );
};

Error.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Error);
