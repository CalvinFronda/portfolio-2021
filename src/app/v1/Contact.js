'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

import ContactFrom from './ContactForm';
const PREFIX = 'Contact';

const classes = {
  root: `${PREFIX}-root`,
  heading: `${PREFIX}-heading`,
  links: `${PREFIX}-links`,
  link: `${PREFIX}-link`,
};

const StyledGrid = styled(Grid)({
  [`&.${classes.root}`]: {
    marginTop: '72px',
    marginBottom: '72px',
  },
  [`& .${classes.heading}`]: {
    fontSize: '42px',
  },
  [`& .${classes.links}`]: {
    listStyleType: 'none',
  },
  [`& .${classes.link}`]: {
    marginBottom: '5em',
    fontSize: '27px',
  },
});

const Contact = () => {
  return (
    <StyledGrid container direction="row" spacing={4} className={classes.root}>
      <Grid size={{ xs: 12 }} className={classes.heading}>
        Get in touch
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} className={classes.contactForm}>
        <ContactFrom />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} align="center">
        <ul className={classes.links}>
          <li className={classes.link}>
            <a
              href="https://drive.google.com/file/d/1AqY_krtyH0yALybtadaAAdrNY1_76jpH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li className={classes.link}>
            <a
              href="https://github.com/CalvinFronda"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className={classes.link}>
            <a
              href="https://www.linkedin.com/in/calvinfronda/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </Grid>
    </StyledGrid>
  );
};

export default Contact;
