import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Input from "@material-ui/core/Input";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  grow: {
    flexGrow: 0.9
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
    display: "none",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      display: "block"
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

class SearchForm extends React.Component {
  state = {
    search: ""
  };
  handleChange = e => {
    this.setState({ search: e.target.value });
  };
  onSetRedirect = e => {
    if (e.key === "Enter") {
      this.props.history.push({
        pathname: "/search",
        search: `?q=${this.state.search}`,
        state: {
          slug: "search",
          detail: this.state.search,
          headerName: "Search Results"
        }
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect()(withStyles(styles, { withTheme: true })(SearchForm))
);
