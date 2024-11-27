import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Header = () => {
  const routes = ['About', 'Experince'];

  return (
    <header className="main-content__left-pane__container">
      <Box className="main-content__left-pane">
        <Box>
          <Typography variant="h2" component="h1" gutterBottom>
            Calvin Fronda
          </Typography>
          <Typography variant="h4" gutterBottom>
            Front-end Developer
          </Typography>

          <Typography variant="body1" gutterBottom>
            I like the build websites and apps that make people go crazy. Look
            at this cool ass website
          </Typography>
        </Box>
        <Box>
          <Link
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener"
          >
            <GitHub fontSize="large" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener"
          >
            <LinkedIn fontSize="large" />
          </Link>
          <Link
            href="https://twitter.com/your-twitter-username"
            target="_blank"
            rel="noopener"
          >
            <Twitter fontSize="large" />
          </Link>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
