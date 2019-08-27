import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoviesbyGenre, getTvsbyGenre } from "../actions/movieTvActions";
import Action2 from "./Action2";
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
          <Action2
            name={this.props.match.params.name}
            handleGoBack={this.handleGoBack}
          />
          <ResultsList queries={queries} loading={loading} />
        </main>
      </div>
    );
  }
}

const mapState = state => {
  console.log(state);
  return {
    queries: state.moviesTvs.queries,
    loading: state.moviesTvs.loading
  };
};

const actions = {
  getMoviesbyGenre,
  getTvsbyGenre
};

export default connect(
  mapState,
  actions
)(SecondaryDashboard);
