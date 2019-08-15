import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./MovieList";
import Action from "./Action";
import { getMoviesGenres, getTvsGenres } from "../actions/movieTvActions";

class MainDashboard extends Component {
  state = {
    toggle: true
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
    const { genres } = this.props;
    return (
      <div>
        <main>
          <Action
            toggle={toggle}
            handleGetMovieGenres={this.handleGetMovieGenres}
            handleGetTvGenres={this.handleGetTvGenres}
          />
          <MovieList genres={genres} />
        </main>
      </div>
    );
  }
}
const mapState = state => {
  console.log(state);
  return {
    genres: state.moviesTvs.genres
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
