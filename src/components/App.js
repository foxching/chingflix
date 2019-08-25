import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavDrawer from "./Material UI/Drawer";
import MainDashboard from "./MainDashboard";
import Footer from "./Footer";
import SecondaryDashboard from "./SecondaryDashboard";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavDrawer />
        <div>
          <Switch>
            <Route path="/" component={MainDashboard} exact />
            <Route path="/:genre/:name" component={SecondaryDashboard} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
