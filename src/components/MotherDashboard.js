import React from "react";
import MainDashboard from "./MainDashboard";
//import SecondaryDashboard from "./SecondaryDashboard";
import Action from "./Action";
import ResultsList from "./ResultsList";

class MotherDashboard extends React.Component {
  render() {
    const { queries, error, fromMain } = this.props;
    return (
      <div>
        {console.log(queries.length)}
        {queries && queries.length === 0 ? (
          <MainDashboard />
        ) : (
          <React.Fragment>
            <Action name="Search Results" fromMain={fromMain} />
            <ResultsList queries={queries} error={error} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default MotherDashboard;
