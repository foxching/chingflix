import React from "react";
import Grid from "@material-ui/core/Grid";

const MovieDetailedInfo = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={3} />
      <Grid item md={6}>
        <h1>Hello Movie</h1>
      </Grid>
      <Grid item md={3}>
        Rating Here
      </Grid>
    </Grid>
  );
};

export default MovieDetailedInfo;
