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

const Action2 = props => {
  const { classes, handleGoBack, name } = props;
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" color="initial" paragraph>
          {name}
        </Typography>

        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                onClick={handleGoBack}
                size="large"
                variant="contained"
                color="secondary"
              >
                Go Back
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
Action2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Action2);
