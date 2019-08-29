import React from "react";
import NavDrawer from "./components/Material UI/NavDrawer";
import Footer from "./components/Footer";

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
