import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearchMoviesTvs } from "../actions/movieTvActions";
import { rejectRedirect } from "../actions/setAction";
import Action from "./Action";
import ResultsList from "./ResultsList";

class World extends Component {
  UNSAFE_componentWillMount() {
    this.props.rejectRedirect();
    this.getSearch(this.props.location.state.detail);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.location.state.detail !== nextProps.location.state.detail) {
      this.getSearch(nextProps.location.state.detail);
    }
  }

  getSearch = detail => [this.props.getSearchMoviesTvs(detail)];

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
