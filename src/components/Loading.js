import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 15,
    color: "#6798e5",
    animationDuration: "500ms"
  }
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} thickness={3} size={60} />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIndeterminate);
