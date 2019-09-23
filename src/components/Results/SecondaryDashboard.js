import React, { Component } from "react";
import { Link } from "react-router-dom";
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
} from "../../actions/movieTvActions";
import Action from "../Action/Action";
import ResultsList from "./ResultsList";
import Pagination from "../Pagination/Pagination";

class SecondaryDashboard extends Component {
  state = {
    pageNum: 1
  };
  handleGoBack = () => {
    this.props.history.goBack("/");
  };

  UNSAFE_componentWillMount() {
    this.loadData(this.props.location.state.slug, this.state.pageNum);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.state.slug !== this.props.location.state.slug) {
      this.loadData(nextProps.location.state.slug, this.state.pageNum);
    }
  }

  loadData = (slug, pageNum) => {
    switch (slug) {
      case "movies":
        this.props.getMoviesbyGenre(this.props.location.state.id);
        break;
      case "tvs":
        this.props.getTvsbyGenre(this.props.location.state.id);
        break;
      case "now-playing":
        this.props.getLatestMovies(pageNum);
        break;
      case "upcoming":
        this.props.getUpcomingMovies(pageNum);
        break;
      case "popular_movies":
        this.props.getTrendingMovies(pageNum);
        break;
      case "airing-today":
        this.props.getOnAirTvShows(pageNum);
        break;
      case "popular_shows":
        this.props.getPopularTvShows(pageNum);
        break;
      case "top_rated_shows":
        this.props.getTopRatedShows(pageNum);
        break;
      default:
        return {};
    }
  };

  render() {
    const { queries, loading, page, totalPage, totalResults } = this.props;
    return (
      <div>
        <main>
          <Action
            loading={loading}
            name={this.props.location.state.headerName}
            handleGoBack={this.handleGoBack}
            id={this.props.location.state.id}
            queries={queries}
          />
          <ResultsList queries={queries} loading={loading} />
          <Pagination
            slug={this.props.location.state.slug}
            loadData={this.loadData}
            page={page}
            totalPage={totalPage}
            totalResults={totalResults}
          />
        </main>
      </div>
    );
  }
}

const mapState = state => {
  return {
    queries: state.moviesTvs.queries,
    page: state.moviesTvs.page,
    totalPage: state.moviesTvs.totalPage,
    totalResults: state.moviesTvs.totalResults,
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
