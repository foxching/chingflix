import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    height: "90%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "70.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center"
  }
});

const MovieListItem = props => {
  const { classes, name } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={`https://source.unsplash.com/random?${name}`}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" component="h5">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles, { withTheme: true })(MovieListItem);
