import React from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { thousandSeparator } from "../../utils/helper";

const MovieDetailedInfo = ({ movie }) => {
  let date = moment(`${movie.release_date}`).format("YYYY");
  console.log(movie);
  return (
    <Grid container spacing={4}>
      <Grid item md={3}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width="100%"
          height="250vh"
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

        <Typography variant="h6">Overview</Typography>

        <p>{movie.overview}</p>
        <p>
          <span style={{ fontWeight: 500 }}>Run Time:</span>{" "}
          <u>{movie.runtime}mins.</u>{" "}
        </p>
        <p>
          <span style={{ fontWeight: 500 }}>Budget:</span>{" "}
          <u>${thousandSeparator(movie.budget)}</u>{" "}
        </p>
        <p>
          <span style={{ fontWeight: 500 }}>Revenue:</span>{" "}
          <u>${thousandSeparator(movie.revenue)}</u>{" "}
        </p>
        <p>
          <span style={{ fontWeight: 500 }}>Genres:</span>
          {movie.genres.map(genre => (
            <span> {genre.name} </span>
          ))}
        </p>
        <p>
          <span style={{ fontWeight: 500 }}>Production Companies:</span>
          {movie.production_companies.map(company => (
            <span> {company.name} </span>
          ))}
        </p>
      </Grid>
      <Grid item md={2}>
        Rating Here
      </Grid>
    </Grid>
  );
};

export default MovieDetailedInfo;
