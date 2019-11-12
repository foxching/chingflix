import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";

const styles = theme => ({
  root: {
    margin: "auto",
    width: "50%",
    position: "absolute",
    top: "45%",
    left: "30%",
    transform: "translateY(-50%)",
    padding: "50px",
    [theme.breakpoints.down("xs")]: {
      width: "70%",
      left: "15%"
    }
  },
  textTypo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px"
    }
  }
});

const Error = props => {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.textTypo} variant="h5" component="h3">
          <InfoIcon /> Something Went Wrong.Please try again!
        </Typography>
      </Paper>
    </div>
  );
};

Error.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Error);
