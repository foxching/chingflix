import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearchMoviesTvs } from "../actions/movieTvActions";
import { rejectRedirect } from "../actions/setAction";
import Action from "./Action";
import ResultsList from "./ResultsList";

class World extends Component {
  UNSAFE_componentWillMount() {
    this.props.rejectRedirect();
    this.props.getSearchMoviesTvs(this.props.location.state.referrer);
  }

  render() {
    const { queries, loading } = this.props;
    return (
      <div>
        <main>
          <Action name="Search Results" />
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
  getSearchMoviesTvs,
  rejectRedirect
};

export default connect(
  mapState,
  actions
)(World);
