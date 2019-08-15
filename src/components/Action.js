import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
});

const Action = props => {
  const { classes, toggle, handleGetMovieGenres, handleGetTvGenres } = props;
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" color="initial" paragraph>
          Movies and Shows Finder
        </Typography>

        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                onClick={handleGetMovieGenres}
                size="large"
                variant={toggle ? "contained" : "outlined"}
                color="primary"
              >
                Movies
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleGetTvGenres}
                size="large"
                variant={toggle ? "outlined" : "contained"}
                color="primary"
              >
                Tv Shows
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
Action.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Action);
