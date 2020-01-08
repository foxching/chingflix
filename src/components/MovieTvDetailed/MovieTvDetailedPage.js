import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { getMovieInfo, getTvInfo } from "../../actions/movieTvActions";
import MovieDetailedInfo from "./MovieDetailedInfo";
import TvDetailedInfo from "./TvDetailedInfo";
import Loading from "../Loading/Loading";
const styles = theme => ({
  root: {
    padding: theme.spacing(10, 8)
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10)
  }
});

class MovieTvDetailedPage extends Component {
  UNSAFE_componentWillMount() {
    if (this.props.location.state.url === "movie") {
      this.props.getMovieInfo(this.props.match.params.id);
    } else {
      this.props.getTvInfo(this.props.match.params.id);
    }
  }

  render() {
    const { classes, movie, tv, loading } = this.props;
    let result;
    if (movie !== undefined) {
      result = <MovieDetailedInfo movie={movie} />;
    } else {
      result = <TvDetailedInfo tv={tv} />;
    }

    return (
      <div>
        <Container className={classes.cardGrid} maxWidth="md">
          {loading ? (
            <Grid align="center"> {loading && <Loading />}</Grid>
          ) : (
            result
          )}
        </Container>
      </div>
    );
  }
}

const mapState = state => {
  return {
    movie: state.moviesTvs.movie,
    tv: state.moviesTvs.tv,
    loading: state.async.loading
  };
};
const actions = {
  getMovieInfo,
  getTvInfo
};

export default compose(
  connect(
    mapState,
    actions
  ),
  withStyles(styles, { withTheme: true })
)(MovieTvDetailedPage);
