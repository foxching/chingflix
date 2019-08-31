import React, { Component } from "react";
import { connect } from "react-redux";
import { getLatestMovie, getUpcomingMovie } from "../actions/movieTvActions";
import Action from "./Action";
import ResultsList from "./ResultsList";

class FeedDashboard extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  // componentDidMount() {
  //   this.loadData();
  // }

  // loadData = () => {
  //   if (this.props.location.url === "latest") {
  //     this.props.getLatestMovie();
  //   }
  //   if (this.props.location.url === "upcoming") {
  //     this.props.getUpcomingMovie();
  //   }
  // };

  render() {
    const { queries, loading } = this.props;
    return (
      <div>
        <main>
          <Action
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
  getLatestMovie,
  getUpcomingMovie
};

export default connect(
  mapState,
  actions
)(FeedDashboard);
