import React from "react";
import { withStyles } from "@material-ui/core/styles";
//import Paper from "@material-ui/core/Paper";
//import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ResultsListItem from "./ResultsListItem";
//import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    padding: theme.spacing(10, 8)
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  }
});

const ResultsList = props => {
  const { classes, movies } = props;

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {movies.map(movie => (
            <Grid key={movie.id} item xs={12} sm={6}>
              <ResultsListItem movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(ResultsList);
