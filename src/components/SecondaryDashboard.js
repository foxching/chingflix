import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMoviesbyGenre,
  getTvsbyGenre,
  getLatestMovies,
  getUpcomingMovies,
  getTrendingMovies,
  getOnAirTvShows,
  getPopularTvShows,
  getTopRatedShows
} from "../actions/movieTvActions";
import Action from "./Action";
import ResultsList from "./ResultsList";

class SecondaryDashboard extends Component {
  handleGoBack = () => {
    this.props.history.goBack("/");
  };

  UNSAFE_componentWillMount() {
    this.loadData(this.props.location.url);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.url !== this.props.location.url) {
      this.loadData(nextProps.location.url);
    }
  }

  loadData = url => {
    switch (url) {
      case "movies":
        this.props.getMoviesbyGenre(this.props.location.id);
        break;
      case "tvs":
        this.props.getTvsbyGenre(this.props.location.id);
        break;
      case "now-playing":
        this.props.getLatestMovies();
        break;
      case "upcoming":
        this.props.getUpcomingMovies();
        break;
      case "popular_movies":
        this.props.getTrendingMovies();
        break;
      case "airing-today":
        this.props.getOnAirTvShows();
        break;
      case "popular_shows":
        this.props.getPopularTvShows();
        break;
      case "top_rated_shows":
        this.props.getTopRatedShows();
        break;
      default:
        return {};
    }
  };

  render() {
    const { queries, loading } = this.props;
    return (
      <div>
        <main>
          <Action
            name={
              this.props.match.params.name
                ? this.props.match.params.name
                : this.props.location.subUrl
            }
            handleGoBack={this.handleGoBack}
          />
          <ResultsList queries={queries} loading={loading} />
        </main>
      </div>
    );
  }
}

const mapState = state => {
  return {
    queries: state.moviesTvs.queries,
    loading: state.moviesTvs.loading
  };
};

const actions = {
  getMoviesbyGenre,
  getTvsbyGenre,
  getLatestMovies,
  getUpcomingMovies,
  getTrendingMovies,
  getOnAirTvShows,
  getPopularTvShows,
  getTopRatedShows
};

export default connect(
  mapState,
  actions
)(SecondaryDashboard);
