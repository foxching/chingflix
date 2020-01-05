import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ResultsListItem from "./ResultsListItem";
import Loading from "../Loading/Loading";

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
  const { classes, queries, loading, url, path } = props;
  let urlTag;
  if (url) {
    urlTag = url.split("/")[2];
  }

  console.log(url);
  console.log(path);
  return (
    <React.Fragment>
      <Grid container spacing={5} align="center" justify="center">
        {loading && <Loading />}
      </Grid>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {queries &&
            queries.map(query => (
              <Grid key={query.id} item xs={12} sm={6}>
                <Link
                  to={{
                    pathname: `/${
                      query.media_type ? query.media_type : urlTag
                    }/${query.id}`,
                    state: { id: query.id }
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <ResultsListItem query={query} />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(ResultsList);
