import React, { Component } from "react";
import { connect } from "react-redux";
import GenreList from "./GenreList";
import Action from "../Action/Action";
import {
  getMoviesGenres,
  getTvsGenres,
  clearResults
} from "../../actions/movieTvActions";

class MainDashboard extends Component {
  state = {
    toggle: false,
    url: "movies"
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
          toggle={toggle}
          handleGetMovieGenres={this.handleGetMovieGenres}
          handleGetTvGenres={this.handleGetTvGenres}
        />
        <GenreList url={url} genres={genres} loading={loading} />
      </div>
    );
  }
}
const mapState = state => {
  return {
    genres: state.moviesTvs.genres,
    loading: state.moviesTvs.loading
  };
};

const actions = {
  getMoviesGenres,
  getTvsGenres,
  clearResults
};
export default connect(
  mapState,
  actions
)(MainDashboard);
