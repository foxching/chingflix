import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  card: {
    maxWidth: 500
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class ResultsListItem extends React.Component {
  truncateText = (text, limit) => {
    const shortened = text.indexOf(" ", limit);
    if (shortened === -1) return text;
    return text.substring(0, shortened);
  };

  render() {
    const {
      classes,
      query: {
        media_type,
        title,
        original_name,
        name,
        poster_path,
        profile_path,
        overview
      }
    } = this.props;
    const titleName = `${title ? title : original_name}`;

    return (
      <Card className={classes.card}>
        <CardHeader title={media_type === "person" ? name : titleName} />
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${
            media_type === "person" ? profile_path : poster_path
          }`}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            {media_type === "person"
              ? "Person Details"
              : this.truncateText(overview && overview, 150)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

ResultsListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultsListItem);
