import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./MovieList";
import Action from "./Action";
import {
  getMoviesGenres,
  getTvsGenres,
  clearResults
} from "../actions/movieTvActions";

class MainDashboard extends Component {
  state = {
    toggle: false
  };
  componentDidMount() {
    this.props.getMoviesGenres();
    this.setState({
      toggle: true
    });
  }
  handleGetMovieGenres = () => {
    this.props.getMoviesGenres();
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  handleGetTvGenres = () => {
    this.props.getTvsGenres();
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };
  render() {
    const { toggle } = this.state;
    const { genres, loading } = this.props;
    return (
      <div>
        <main>
          <Action
            toggle={toggle}
            handleGetMovieGenres={this.handleGetMovieGenres}
            handleGetTvGenres={this.handleGetTvGenres}
          />
          <MovieList genres={genres} loading={loading} />
        </main>
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
