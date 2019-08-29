import React, { Component } from "react";
import { connect } from "react-redux";
import { getLatestMovie } from "../actions/movieTvActions";
import Action2 from "./Action2";
import ResultsList from "./ResultsList";

class FeedDashboard extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  componentDidMount() {
    this.props.getLatestMovie();
  }

  render() {
    const { queries, loading } = this.props;
    return (
      <div>
        <main>
          <Action2
            name={this.props.location.subUrl}
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
  getLatestMovie
};

export default connect(
  mapState,
  actions
)(FeedDashboard);
