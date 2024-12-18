import React from 'react';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-scroll';

const Header = () => {
  const test = '';

  return (
    <div className="section">
      <Grid container direction="row" alignContent="center">
        <Grid size={1}>CF.</Grid>

        <Grid size={{ xs: 12, md: 11 }}>
          <ul>
            <li className="navlinks"></li>
            <li className="navlinks">
              <a
                href="https://drive.google.com/file/d/1AqY_krtyH0yALybtadaAAdrNY1_76jpH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li className="navlinks">
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                offset={50}
                duration={900}
                delay={100}
              >
                Contact
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
