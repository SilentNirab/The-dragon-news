import { Grid } from '@mui/material';
import React from 'react';
import LetestNews from '@/components/ui/LetestNews/LetestNews';
import SideBar from '@/components/ui/SideBar/SideBar';

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <p>Latest News</p>
        <LetestNews></LetestNews>
      </Grid>
      <Grid item xs={4}>
        <SideBar></SideBar>
      </Grid>
    </Grid>
  );
};

export default HomePage;