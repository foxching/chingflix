import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "70.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
});

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MovieListItem = props => {
  const { classes, genre } = props;

  return (
    <Grid xs={6} sm={6} md={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={`https://source.unsplash.com/random?${genre.name}`}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h5">
            {genre.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(MovieListItem);
