import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
import Error from "../Error/Error";

class SecondaryDashboard extends Component {
  state = {
    pageNum: 1,
    search: ""
  };

  UNSAFE_componentWillMount() {
    this.loadData(this.props.location.state.slug, this.state.pageNum);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.state.slug !== this.props.location.state.slug) {
      this.loadData(
        nextProps.location.state.slug,
        this.state.search,
        this.state.pageNum
      );
    }
  }

  loadData = (slug, search, pageNum) => {
    switch (slug) {
      case "movie":
        this.props.getMoviesbyGenre(this.props.location.state.id, pageNum);
        break;
      case "tv":
        this.props.getTvsbyGenre(this.props.location.state.id, pageNum);
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
    const {
      queries,
      loading,
      page,
      totalPage,
      totalResults,
      error
    } = this.props;

    const title = this.props.location.state.headerName;
    const subTitle =
      this.props.match.url
        .split("/")[2]
        .charAt(0)
        .toUpperCase() + this.props.match.url.split("/")[2].substr(1);
    return (
      <div>
        {!error ? (
          <div>
            <Helmet>
              <title>
                {title} {subTitle}s
              </title>
              <meta name="description" content={`${title} ${subTitle}`} />
            </Helmet>
            <Action
              loading={loading}
              name={this.props.location.state.headerName}
              id={this.props.location.state.id}
              queries={queries}
            />
            <ResultsList
              url={this.props.match.url}
              path={this.props.match.path}
              queries={queries}
              loading={loading}
            />
            <Pagination
              slug={this.props.location.state.slug}
              loadData={this.loadData}
              page={page}
              totalPage={totalPage}
              totalResults={totalResults}
            />
          </div>
        ) : (
          <Error />
        )}
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
    loading: state.async.loading,
    error: state.moviesTvs.error
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
