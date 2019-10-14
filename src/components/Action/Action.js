import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  heroContent: {
    padding: theme.spacing(8, 2, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
});

const Action = props => {
  const {
    classes,
    toggle,
    handleGetMovieGenres,
    handleGetTvGenres,
    loading,
    name
  } = props;
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" color="initial" paragraph>
          {loading ? "Please wait...." : name}
        </Typography>

        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            {handleGetMovieGenres && handleGetTvGenres ? (
              <React.Fragment>
                <Grid item>
                  <Button
                    onClick={handleGetMovieGenres}
                    size="large"
                    variant={toggle ? "contained" : "outlined"}
                    color="secondary"
                  >
                    Movies
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleGetTvGenres}
                    size="large"
                    variant={toggle ? "outlined" : "contained"}
                    color="secondary"
                  >
                    Tv Shows
                  </Button>
                </Grid>
              </React.Fragment>
            ) : null}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

Action.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  toggle: PropTypes.bool,
  handleGetMovieGenres: PropTypes.func,
  handleGetTvGenres: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(Action);
