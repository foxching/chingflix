import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by  "}
      <Link color="secondary" href="https://material-ui.com/">
        Rechie Lagria
      </Link>
    </Typography>
  );
}

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    //position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center"
  }
});

const Footer = props => {
  const { classes, error } = props;
  let pos;
  if (error) {
    pos = "fixed";
  }
  return (
    <React.Fragment>
      <footer className={classes.footer} style={{ position: pos }}>
        <Typography variant="h6" align="center" gutterBottom>
          CHINGFLIX
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Find your favorites movies and tv shows
        </Typography>
        <MadeWithLove />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

const mapState = state => {
  return {
    error: state.moviesTvs.error
  };
};

export default compose(
  connect(mapState),
  withStyles(styles, { withTheme: true })
)(Footer);
