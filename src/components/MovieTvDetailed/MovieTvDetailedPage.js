import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getMovieInfo, getTvInfo } from "../../actions/movieTvActions";
import MovieDetailedInfo from "./MovieDetailedInfo";
import TvDetailedInfo from "./TvDetailedInfo";
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
    const { classes, movie, tv } = this.props;
    let result;
    if (movie !== undefined) {
      result = <MovieDetailedInfo />;
    } else {
      result = <TvDetailedInfo />;
    }

    return (
      <Container className={classes.cardGrid} maxWidth="md">
        {result}
      </Container>
    );
  }
}

const mapState = state => {
  return {
    movie: state.moviesTvs.movie,
    tv: state.moviesTvs.tv
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
