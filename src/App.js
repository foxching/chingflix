import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Nav/Navigation";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import TvSeries from "./Pages/TvSeries/TvSeries";
import Search from "./Pages/Search/Search";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route exact path="/" component={Trending}></Route>
              <Route path="/movies" component={Movies}></Route>
              <Route path="/series" component={TvSeries}></Route>
              <Route path="/search" component={Search}></Route>
            </Switch>
          </Container>
        </div>
        <Navigation />
      </BrowserRouter>
    );
  }
}

export default App;
