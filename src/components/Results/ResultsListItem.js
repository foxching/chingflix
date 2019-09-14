import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

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
        overview,
        release_date,
        first_air_date
      }
    } = this.props;
    const titleName = `${title ? title : original_name}`;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={media_type === "person" ? name : titleName}
          subheader={
            media_type === "person"
              ? ""
              : moment(
                  `${release_date ? release_date : first_air_date}`
                ).format("MMMM Do YYYY")
          }
        />
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
              : this.truncateText(overview && overview, 90)}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent />
        </Collapse>
      </Card>
    );
  }
}

ResultsListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultsListItem);
