import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GenreList from "./GenreList";
import Action from "../Action/Action";
import { getMoviesGenres, getTvsGenres } from "../../actions/movieTvActions";

class MainDashboard extends Component {
  state = {
    toggle: false,
    url: "movies",
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
      url: "movies"
    }));
  };

  handleGetTvGenres = () => {
    this.props.getTvsGenres();
    this.setState(prevState => ({
      toggle: !prevState.toggle,
      url: "tvs"
    }));
  };

  render() {
    const { toggle, url } = this.state;
    const { genres, loading } = this.props;
    return (
      <div>
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
}

MainDashboard.propTypes = {
  genres: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapState = state => {
  return {
    genres: state.moviesTvs.genres,
    loading: state.moviesTvs.loading
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
