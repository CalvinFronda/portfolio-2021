import React from 'react';

import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Tooltip } from '@mui/material';

const LocalIconButton = ({ children, tooltip }) => (
  <Tooltip title={tooltip || ''}>
    <IconButton
      sx={{
        ':hover': {
          bgcolor: '#1B263B', // theme.palette.primary.main
          color: '#0D1B2A',
        },
      }}
    >
      {children}
    </IconButton>
  </Tooltip>
);

const Header = () => {
  const routes = ['About', 'Experince'];

  return (
    <header className="main-content__left-pane__container">
      <div>
        <h1>Calvin Fronda</h1>
        <h2>Software Engineer</h2>
        <p>I like to code </p>

        <div className="social-links">
          <Link
            href="https://github.com/CalvinFronda"
            target="_blank"
            rel="noopener"
          >
            <LocalIconButton tooltip="Github">
              <GitHub fontSize="large" sx={{ color: '#E0E1DD' }} />
            </LocalIconButton>
          </Link>

          <Link
            href="https://www.linkedin.com/in/calvinfronda/"
            target="_blank"
            rel="noopener"
          >
            <LocalIconButton tooltip="LinkedIn">
              <LinkedIn fontSize="large" sx={{ color: '#E0E1DD' }} />
            </LocalIconButton>
          </Link>

          <Link
            href="https://drive.google.com/file/d/16DkthrnaXgqg-hVaMoZgZK7jwXf3KZhc/view"
            target="_blank"
            rel="noopener"
          >
            <LocalIconButton tooltip="Resume">
              <AssignmentIndIcon fontSize="large" sx={{ color: '#E0E1DD' }} />
            </LocalIconButton>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
