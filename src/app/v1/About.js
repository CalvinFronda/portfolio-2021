'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import professionalPicture from '../../assets/images/calvin-2021-profilepic.jpg';
const PREFIX = 'About';

const classes = {
  root: `${PREFIX}-root`,
  heading: `${PREFIX}-heading`,
  profilePic: `${PREFIX}-profilePic`,
  topText: `${PREFIX}-topText`,
  bottomText: `${PREFIX}-bottomText`,
};

const StyledGrid = styled(Grid)({
  [`&.${classes.root}`]: {
    paddingTop: '72px',
    paddingBottom: '72px',
  },
  [`& .${classes.heading}`]: {
    fontSize: '42px',
  },
  [`& .${classes.profilePic}`]: {
    display: 'flex',
    justifyContent: 'center',
    objectFit: 'cover',
    maxHeight: 580,
    maxWidth: 580,
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
  [`& .${classes.topText}`]: {
    fontSize: '24px',
    marginBottom: '3em',
  },
  [`& .${classes.bottomText}`]: {
    fontSize: '24px',
  },
});

const About = () => {
  return (
    <StyledGrid container direction="row" spacing={4} className={classes.root}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          className={classes.profilePic}
          src={professionalPicture}
          width={580}
          height={580}
          alt="personal"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography className={classes.topText}>
          Building products and working with users has taught me to pay
          attention to detail and care deeply about my work. As a result, I’m
          enthusiastic about building software that helps people, eager to learn
          how to develop more robust systems, and excited to own impactful
          projects.
        </Typography>
        <Typography className={classes.bottomText}>
          On the weekends, I try to find something exciting to do outdoors,
          whether going mountain bike riding, playing sports, or spending some
          time at amusement parks. When I can’t go outside, I learn new recipes
          and bake (hopefully) delicious pastries.
        </Typography>
      </Grid>
    </StyledGrid>
  );
};

export default About;
