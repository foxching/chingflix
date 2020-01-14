import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { thousandSeparator } from "../../utils/helper";

class MovieDetailedInfo extends Component {
  state = {
    modalOpened: false
  };

  setModalOpened = () => {
    this.setState({
      modalOpened: true
    });
  };

  setmodalClosed = () => {
    this.setState({
      modalOpened: false
    });
  };

  render() {
    const { movie } = this.props;
    const date = moment(`${movie.release_date}`).format("YYYY");
    const { modalOpened } = this.state;
    const { setModalOpened, setmodalClosed } = this;
    return (
      <React.Fragment>
        <Helmet>
          <title>{movie.title}</title>
          <meta name="description" content={`${movie.title}`} />
        </Helmet>
        <Grid container spacing={4}>
          <Grid item md={3}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width="100%"
              height="300vh"
              alt=""
            />
          </Grid>
          <Grid item md={7}>
            <Typography variant="h4" gutterBottom>
              {movie.title}
              <Typography component="span" variant="subtitle2" color="error">
                ({date})
              </Typography>
            </Typography>

            <Typography variant="subtitle1">
              <strong>Run Time:</strong>
              <span style={{ color: "red" }}>{movie.runtime}mins</span>
            </Typography>

            <Typography variant="subtitle1">
              <strong>Budget:</strong>
              <span style={{ color: "red" }}>
                ${thousandSeparator(movie.budget)}
              </span>
            </Typography>

            <Typography variant="subtitle1">
              <strong>Revenue:</strong>
              <span style={{ color: "red" }}>
                ${thousandSeparator(movie.revenue)}
              </span>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              <strong>Genres:</strong>
              {movie.genres.map(genre => (
                <span key={genre.id} style={{ color: "red" }}>
                  {" "}
                  {genre.name}
                  {", "}
                </span>
              ))}
            </Typography>

            <Typography variant="subtitle1">
              <strong>Production Companies:</strong>
              {movie.production_companies.map(company => (
                <span key={company.id} style={{ color: "red" }}>
                  {company.name},
                </span>
              ))}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h3">
              <span style={{ color: "red" }}>
                {movie.vote_average.toFixed(1)}
              </span>
            </Typography>
            <Typography variant="overline">{movie.vote_count} votes</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item md={5} />
          <Grid item md={7}>
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "30px" }}
              >
                Share
                <ShareIcon />
              </Button>

              {renderTrailer(
                movie.videos.results,
                modalOpened,
                setModalOpened,
                setmodalClosed
              )}

              <Button
                variant="contained"
                color="default"
                style={{ marginLeft: "30px" }}
              >
                Favorite
                <FavoriteIcon />
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Typography variant="h6" color="error">
              Storyline
            </Typography>
            <Typography variant="subtitle1">{movie.overview}</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h6" color="error">
              Details
            </Typography>
            <Typography variant="subtitle1">
              <strong>Status:</strong>
              <span style={{ color: "red" }}>{movie.status}</span>
            </Typography>
            <Typography variant="subtitle1">
              <strong>Release Date:</strong>
              <span style={{ color: "red" }}>{movie.release_date}</span>
            </Typography>
            <Typography variant="subtitle1">
              <strong>Language:</strong>
              {movie.spoken_languages.map(lang => (
                <span key={lang.name} style={{ color: "red" }}>
                  {lang.name},
                </span>
              ))}
            </Typography>
          </Grid>
          <Grid item md={6}>
            <br />
            <br />
            <Typography variant="subtitle1">
              <strong>IMDb ID:</strong>
              <span style={{ color: "red" }}>{movie.imdb_id}</span>
            </Typography>
            <Typography variant="subtitle1">
              <strong>Country:</strong>
              {movie.production_countries.map(country => (
                <span key={country.name} style={{ color: "red" }}>
                  {country.name},
                </span>
              ))}
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

/// Render Trailer button. On click triggers state to open modal of trailer
function renderTrailer(videos, modalOpened, setmodalOpened, setmodalClosed) {
  if (videos.length === 0) {
    return;
  }
  const { key } = videos.find(
    video => video.type === "Trailer" && video.site === "YouTube"
  );
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginLeft: "30px" }}
        onClick={setmodalOpened}
      >
        Trailer
        <PlayArrowIcon />
      </Button>

      <ModalVideo
        channel="youtube"
        isOpen={modalOpened}
        videoId={key}
        onClose={setmodalClosed}
      />
    </React.Fragment>
  );
}

export default MovieDetailedInfo;
