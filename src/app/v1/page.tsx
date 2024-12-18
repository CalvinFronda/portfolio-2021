'use client';
import './App.scss';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-scroll';
import ScrollToTop from '../shared/ScrollToTop';

const PREFIX = 'App';

const classes = {
  root: `${PREFIX}-root`,
  menuButton: `${PREFIX}-menuButton`,
  logo: `${PREFIX}-logo`,
  navList: `${PREFIX}-navList`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '72px',
    marginBottom: '72px',
  },

  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(1),
  },

  [`& .${classes.logo}`]: {
    fontSize: '35px',
    fontWeight: 'bold',
  },

  [`& .${classes.navList}`]: {
    listStyleType: 'none',
    textAlign: 'right',
  },
}));

function App() {
  return (
    <Root className="section">
      <Grid
        container
        direction="row"
        alignContent="center"
        className={classes.root}
      >
        <Grid size={{ xs: 1 }} className={classes.logo}>
          CF.
        </Grid>

        <Grid size={{ xs: 12, md: 11 }}>
          <ul className={classes.navList}>
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

      <ScrollToTop />

      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </Root>
  );
}

export default App;
