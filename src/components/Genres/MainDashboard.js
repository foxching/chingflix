import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import GenreList from "./GenreList";
import Action from "../Action/Action";
import Error from "../Error/Error";
import { getMoviesGenres, getTvsGenres } from "../../actions/movieTvActions";

class MainDashboard extends Component {
  state = {
    toggle: false,
    url: "movie",
    name: "Genre List"
  };

  UNSAFE_componentWillMount() {
    this.props.getMoviesGenres();
    this.setState({
      toggle: true
    });
  }
  handleGetMovieGenres = () => {
    this.props.getMoviesGenres();
    this.setState(prevState => ({
      toggle: !prevState.toggle,
      url: "movie"
    }));
  };

  handleGetTvGenres = () => {
    this.props.getTvsGenres();
    this.setState(prevState => ({
      toggle: !prevState.toggle,
      url: "tv"
    }));
  };

  render() {
    const { toggle, url } = this.state;
    const { genres, loading, error } = this.props;
    let genre = (
      <div>
        <Error />
      </div>
    );
    if (!error) {
      genre = (
        <div>
          <Helmet>
            <title>Home- Genre List</title>
            <meta name="description" content="Genre List" />
          </Helmet>
          <Action
            loading={loading}
            name={this.state.name}
            toggle={toggle}
            handleGetMovieGenres={this.handleGetMovieGenres}
            handleGetTvGenres={this.handleGetTvGenres}
          />
          <GenreList url={url} genres={genres} loading={loading} />
        </div>
      );
    }
    return genre;
  }
}

MainDashboard.propTypes = {
  genres: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapState = state => {
  return {
    genres: state.moviesTvs.genres,
    loading: state.async.loading,
    error: state.moviesTvs.error
  };
};

const actions = {
  getMoviesGenres,
  getTvsGenres
};

export default connect(
  mapState,
  actions
)(MainDashboard);
