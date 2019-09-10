import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
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
//import Tv from "@material-ui/icons/Tv";
//import Movie from "@material-ui/icons/Movie";
import TrendingUp from "@material-ui/icons/TrendingUp";
import AvTimer from "@material-ui/icons/AvTimer";
import LiveTv from "@material-ui/icons/LiveTv";
import OndemandVideo from "@material-ui/icons/OndemandVideo";

import World from "../World";
import MainDashboard from "../MainDashboard";
import SecondaryDashboard from "../SecondaryDashboard";
import { getSearchMoviesTvs } from "../../actions/movieTvActions";
import { setRedirect, rejectRedirect } from "../../actions/setAction";

import Input from "@material-ui/core/Input";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";

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

  grow: {
    flexGrow: 0.9
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

const history = createBrowserHistory();

class NavDrawer extends React.Component {
  state = {
    open: false,
    search: "",
    fromMain: true,
    setRedirect: false
    search: ""

  };

  componentDidMount() {
    this.setState({
      setRedirect: false
    });
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  onSetRedirect = e => {
    if (e.key === "Enter") {
      this.props.setRedirect();
    }
  };
  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { classes, theme, queries, setter } = this.props;
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
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>

                  <Input
                    placeholder="Search here... "
                    value={this.state.search}
                    onChange={this.handleChange}

                    onKeyDown={this.onSetRedirect}


                    disableUnderline
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                  />
                </div>
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
                    url: "now-playing",
                    subUrl: "Now Playing"
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
                    url: "upcoming",
                    subUrl: "Upcoming Movies"
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
                    url: "popular_movies",
                    subUrl: "Popular Movies"
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
                    url: "airing-today",
                    subUrl: "On Air Shows"
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
                    url: "popular_shows",
                    subUrl: "Popular TV Shows"
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
                    url: "top_rated_shows",
                    subUrl: "Top Rated TV Shows"
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

                  <Route
                    exact
                    path="/"
                    render={props =>
                      setter ? (
                        <Redirect
                          to={{
                            pathname: "/search",
                            search: `?utm=${this.state.search}`,
                            state: { referrer: this.state.search }
                          }}
                        />
                      ) : (
                        <MainDashboard
                          {...props}
                          setRedirect={this.state.setRedirect}
                          search={this.state.search}
                          queries={queries}
                          fromMain={this.state.fromMain}
                        />
                      )
                    }
                  />
                  <Route exact path="/search/" component={World} />
                  <Route
                    strict
                    path="/:genre/:name"
                    component={SecondaryDashboard}
                  />

                  <Route exact path="/" component={MainDashboard} />
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

const mapState = state => {
  return {
    queries: state.moviesTvs.queries,
    setter: state.setter.allowRedirect
  };
};
const actions = {
  getSearchMoviesTvs,
  setRedirect,
  rejectRedirect
};
export default compose(
  connect(
    mapState,
    actions
  ),
  withStyles(styles, { withTheme: true })
)(NavDrawer);
