import React from "react";
import NavDrawer from "./components/Material UI/NavDrawer";
import MainDashboard from "./components/MainDashboard";
import Footer from "./components/Footer";
import SecondaryDashboard from "./components/SecondaryDashboard";
import Action from  "./components/Action"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavDrawer />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
