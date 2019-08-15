import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Movie from "@material-ui/icons/Movie";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Movie className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Movie Database
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
