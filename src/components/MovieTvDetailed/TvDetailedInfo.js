import React from "react";
import Grid from "@material-ui/core/Grid";

const TvDetailedInfo = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={3} />
      <Grid item md={6}>
        <h1>Hello Tv</h1>
      </Grid>
      <Grid item md={3}>
        Rating Here
      </Grid>
    </Grid>
  );
};

export default TvDetailedInfo;
