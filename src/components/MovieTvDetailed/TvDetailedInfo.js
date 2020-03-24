import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModalVideo from "react-modal-video";

class TvDetailedInfo extends Component {
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
    const { tv } = this.props;
    console.log(tv);
    let poster,
      title,
      date,
      runTime,
      status,
      noOfSeasons,
      genres,
      companies,
      vote_average,
      vote_count,
      overview,
      videos;
    let firtstAirDate, lastAirDate, languages, createdBy, originCountry;
    if (tv) {
      poster = tv.poster_path;
      title = tv.name;
      date = moment(`${tv.first_air_date}`).format("YYYY ");
      runTime = tv.episode_run_time;
      status = tv.status;
      noOfSeasons = tv.number_of_seasons;
      genres = tv.genres;
      companies = tv.production_companies;
      vote_average = tv.vote_average;
      vote_count = tv.vote_count;
      overview = tv.overview;
      firtstAirDate = tv.first_air_date;
      lastAirDate = tv.last_air_date;
      languages = tv.languages;
      createdBy = tv.created_by;
      originCountry = tv.origin_country;
      videos = tv.videos.results;
    }
    const { modalOpened } = this.state;
    const { setModalOpened, setmodalClosed } = this;
    return (
      <React.Fragment>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={`${title}`} />
        </Helmet>
        <Grid container spacing={4}>
          <Grid item md={3}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              width="100%"
              height="300vh"
              alt=""
            />
          </Grid>
          <Grid item md={7}>
            <Typography variant="h4" gutterBottom>
              {title}
              <Typography component="span" variant="subtitle2" color="error">
                ({date})
              </Typography>
            </Typography>

            <Typography variant="subtitle1">
              <strong>Episode RunTime:</strong>
              {runTime &&
                runTime.map(time => (
                  <span key={time} style={{ color: "red" }}>
                    {" "}
                    {time} mins,{" "}
                  </span>
                ))}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Status:</strong>
              <span style={{ color: "red" }}>{status}</span>
            </Typography>
            <Typography variant="subtitle1">
              <strong>No. of Seasons:</strong>
              <span style={{ color: "red" }}>{noOfSeasons}</span>
            </Typography>
            <Typography variant="subtitle1">
              <strong>Genres:</strong>
              {genres &&
                genres.map((genre, index) => (
                  <span key={genre.id}>
                    <Link
                      to={{
                        pathname: `/genres/tv/${genre.name}`,
                        state: {
                          slug: "tv",
                          id: `${genre.id}`,
                          headerName: `${genre.name}`
                        }
                      }}
                      style={{ color: "red" }}
                    >
                      {genre.name}
                      {index !== genres.length - 1 && ","}
                    </Link>
                  </span>
                ))}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Production Companies:</strong>
              {companies &&
                companies.map((company, index) => (
                  <span key={company.id} style={{ color: "red" }}>
                    {company.name}
                    {index !== companies.length - 1 && ","}
                  </span>
                ))}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h3">
              <span style={{ color: "red" }}>{vote_average}</span>
            </Typography>
            <Typography variant="overline">{vote_count} votes</Typography>
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
              {videos &&
                renderTrailer(
                  videos,
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
            <Typography variant="subtitle1">{overview}</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h6" color="error">
              Details
            </Typography>
            <Typography variant="subtitle1">
              <strong>First Air Date:</strong>
              <span style={{ color: "red" }}>{firtstAirDate}</span>
            </Typography>
            <Typography variant="subtitle1">
              <strong>Last Air Date:</strong>
              <span style={{ color: "red" }}>{lastAirDate}</span>
            </Typography>
            <Typography variant="subtitle1">
              <strong>Language(s):</strong>
              {languages &&
                languages.map((lang, index) => (
                  <span key={lang} style={{ color: "red" }}>
                    {lang}
                    {index !== languages.length - 1 && ","}
                  </span>
                ))}
            </Typography>
          </Grid>
          <Grid item md={6}>
            <br />
            <br />
            <Typography variant="subtitle1">
              <strong>Created By:</strong>
              {createdBy &&
                createdBy.map((creator, index) => (
                  <span key={creator.id} style={{ color: "red" }}>
                    {creator.name}
                    {index !== createdBy.length - 1 && ","}
                  </span>
                ))}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Country:</strong>
              <span style={{ color: "red" }}>{originCountry}</span>
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
    video =>
      (video.type === "Trailer" ||
        video.type === "Featurette" ||
        video.type === "Opening Credits") &&
      video.site === "YouTube"
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

export default TvDetailedInfo;
