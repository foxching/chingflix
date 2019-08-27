import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ResultsListItem from "./ResultsListItem";
import Loading from "./Loading";
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
  const { classes, queries, loading } = props;

  return (
    <React.Fragment>
      <Grid spacing={5} align="center" justify="center">
        {loading && <Loading />}
      </Grid>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {queries.map(query => (
            <Grid key={query.id} item xs={12} sm={6}>
              <ResultsListItem query={query} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(ResultsList);
