import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  root: {
    padding: theme.spacing(10, 8)
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10)
  }
});

const MovieTvDetailedPage = ({ classes }) => {
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        <Grid item md={3}>
          Image Here
        </Grid>
        <Grid item md={6}>
          <h1>Hello Rechie</h1>
          <span>Drama</span>,<span>Action</span>
        </Grid>
        <Grid item md={3}>
          Rating Here
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(MovieTvDetailedPage);
