import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
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

const MovieList = props => {
  const { classes, genres } = props;

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {genres.map(card => (
            <Grid item key={card.id} xs={6} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://source.unsplash.com/random?${card.name}`}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" component="h5">
                    {card.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(MovieList);
