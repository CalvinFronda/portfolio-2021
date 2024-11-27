import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

const PREFIX = 'Landing';

const classes = {
  root: `${PREFIX}-root`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    fontSize: 'calc(30px + 1vw)',
    paddingTop: '72px',
    paddingBottom: '72px',
  },
}));

const Landing = () => {
  return (
    <StyledGrid className={classes.root}>
      <Grid size={{ xs: 12 }}>Hello!</Grid>
      <Grid size={{ xs: 12, md: 10 }}>
        My name is Calvin Fronda and I am a frontend web developer based in Los
        Angeles. Looking to use my expertise in retail and customer services to
        build beautiful, responsive and functional applications
      </Grid>
    </StyledGrid>
  );
};

export default Landing;
