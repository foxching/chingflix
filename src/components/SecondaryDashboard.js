import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Action2 from "./Action2";
import { getMoviesbyGenre } from "../actions/movieTvActions";

const styles = theme => ({
  root: {
    padding: theme.spacing(9, 6)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 6)
  }
});

class SecondaryDashboard extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  componentDidMount() {
    this.props.getMoviesbyGenre(this.props.location.id);
  }

  render() {
    const { classes } = this.props;
    console.log(this.props.location.id);
    return (
      <div>
        <main>
          <Action2
            name={this.props.match.params.name}
            handleGoBack={this.handleGoBack}
          />
          <Container maxWidth="md">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper className={classes.root} style={{ marginBottom: 10 }}>
                  <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                  </Typography>
                  <Typography component="p">
                    Paper can be used to build surface or other elements for
                    your application.
                  </Typography>
                </Paper>
                <Paper className={classes.root} style={{ marginBottom: 10 }}>
                  <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                  </Typography>
                  <Typography component="p">
                    Paper can be used to build surface or other elements for
                    your application.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.root} style={{ marginBottom: 10 }}>
                  <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                  </Typography>
                  <Typography component="p">
                    Paper can be used to build surface or other elements for
                    your application.
                  </Typography>
                </Paper>
                <Paper className={classes.root} style={{ marginBottom: 10 }}>
                  <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                  </Typography>
                  <Typography component="p">
                    Paper can be used to build surface or other elements for
                    your application.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}

const mapState = state => {
  console.log(state);
  return {
    movies: state.moviesTvs.movies
  };
};

const actions = {
  getMoviesbyGenre
};

export default compose(
  connect(
    mapState,
    actions
  ),
  withStyles(styles, { withTheme: true })
)(SecondaryDashboard);