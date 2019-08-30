import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMoviesbyGenre,
  getTvsbyGenre,
  getLatestMovie
} from "../actions/movieTvActions";
import Action from "./Action";
//import Action2 from "./Action2";
import ResultsList from "./ResultsList";

class SecondaryDashboard extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  componentDidMount() {
    if (this.props.location.url === "movies") {
      this.props.getMoviesbyGenre(this.props.location.id);
    } else {
      this.props.getTvsbyGenre(this.props.location.id);
    }
  }

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
  getLatestMovie
};

export default connect(
  mapState,
  actions
)(SecondaryDashboard);
