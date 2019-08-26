import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoviesbyGenre } from "../actions/movieTvActions";
import Action2 from "./Action2";
import ResultsList from "./ResultsList";

class SecondaryDashboard extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  componentDidMount() {
    this.props.getMoviesbyGenre(this.props.location.id);
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <main>
          <Action2
            name={this.props.match.params.name}
            handleGoBack={this.handleGoBack}
          />
          <ResultsList movies={movies} />
        </main>
      </div>
    );
  }
}

const mapState = state => {
  return {
    movies: state.moviesTvs.movies
  };
};

const actions = {
  getMoviesbyGenre
};

export default connect(
  mapState,
  actions
)(SecondaryDashboard);
