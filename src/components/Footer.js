import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
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
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: "auto"
  }
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          CHINGDB
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
}
