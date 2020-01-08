import React from "react";
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const styles = theme => ({
  card: {
    height: "80%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "73.25%"
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center"
  }
});

const GenreListItem = props => {
  const { classes, name } = props;
  let img;
  if (name) {
    img = `https://source.unsplash.com/random?${name}`;
  } else {
    img = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmFhR7Y7GCn-4CYDWtt_NmP2l66iNl27wuy_nT1VN4LK08npxA`;
  }
  return (
    <div>
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ width: "200px", height: "150px" }}
      >
        {/* <Card className={classes.card}> */}
        <FrontSide>
          {" "}
          <CardMedia
            className={classes.cardMedia}
            image={img}
            title="Image title"
          />
        </FrontSide>

        <BackSide>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" component="h5">
              {name}
            </Typography>
          </CardContent>
        </BackSide>
        {/* </Card> */}
      </Flippy>
    </div>
  );
};

GenreListItem.protoTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(GenreListItem);
