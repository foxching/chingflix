import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Router, Route, Link, Switch } from "react-router-dom";
//import createBrowserHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import Theaters from "@material-ui/icons/Theaters";
import Poll from "@material-ui/icons/Poll";
import TrendingUp from "@material-ui/icons/TrendingUp";
import AvTimer from "@material-ui/icons/AvTimer";
import LiveTv from "@material-ui/icons/LiveTv";
import OndemandVideo from "@material-ui/icons/OndemandVideo";

import SearchDashboard from "../Search/SearchDashboard";
import MainDashboard from "../Genres/MainDashboard";
import SecondaryDashboard from "../Results/SecondaryDashboard";
import SearchForm from "./SearchForm";

const drawerWidth = 250;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  title: {
    display: "block",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
});

const history = createBrowserHistory();

class NavDrawer extends React.Component {
  state = {
    open: false,
    fromMain: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Router history={history}>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              color="secondary"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.title}
                  component={Link}
                  to="/"
                  style={{ textDecoration: "none" }}
                  noWrap
                >
                  CHINGFLIX
                </Typography>
                <SearchForm />
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
              <Divider />

              <List>
                {" "}
                <ListSubheader inset>Movies</ListSubheader>
                <ListItem
                  button
                  component={Link}
                  to={{
                    pathname: "/movies/now-playing",
                    state: { slug: "now-playing", headerName: "Now Playing" }
                  }}
                >
                  <ListItemIcon>
                    <Theaters />
                  </ListItemIcon>
                  <ListItemText primary="Now Playing" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={{
                    pathname: "/movies/upcoming",
                    state: { slug: "upcoming", headerName: "Upcoming Movies" }
                  }}
                >
                  <ListItemIcon>
                    <AvTimer />
                  </ListItemIcon>
                  <ListItemText primary="Upcoming" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={{
                    pathname: "/movies/popular",
                    state: {
                      slug: "popular_movies",
                      headerName: "Popular Movies"
                    }
                  }}
                >
                  <ListItemIcon>
                    <Poll />
                  </ListItemIcon>
                  <ListItemText primary="Popular" />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListSubheader inset>Televisions</ListSubheader>
                <ListItem
                  button
                  component={Link}
                  to={{
                    pathname: "/tvs/airing-today",
                    state: { slug: "airing-today", headerName: "On Air Shows" }
                  }}
                >
                  <ListItemIcon>
                    <LiveTv />
                  </ListItemIcon>
                  <ListItemText primary="On Air" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={{
                    pathname: "/tvs/popular",
                    state: {
                      slug: "popular_shows",
                      headerName: "Popular TV Shows"
                    }
                  }}
                >
                  <ListItemIcon>
                    <OndemandVideo />
                  </ListItemIcon>
                  <ListItemText primary="Popular" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={{
                    pathname: "/tvs/top-rated",
                    state: {
                      slug: "top_rated_shows",
                      headerName: "Top Rated TV Shows"
                    }
                  }}
                >
                  <ListItemIcon>
                    <TrendingUp />
                  </ListItemIcon>
                  <ListItemText primary="Top Rated" />
                </ListItem>
              </List>
            </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open
              })}
            >
              <div>
                <Switch>
                  <Route exact path="/" component={MainDashboard} />
                  <Route path="/search" component={SearchDashboard} />
                  <Route path="/:genre/:name" component={SecondaryDashboard} />
                </Switch>
              </div>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default compose(
  connect(),
  withStyles(styles, { withTheme: true })
)(NavDrawer);
