import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <p>xs=8</p>
      </Grid>
      <Grid item xs={4}>
        <p>xs=4</p>
      </Grid>
    </Grid>
  );
};

export default HomePage;