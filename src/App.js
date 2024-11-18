import './App.scss';
import Grid from '@mui/material/Grid';

import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Landing from './components/landing/Landing';
// import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { Link } from 'react-scroll';
import ScrollToTop from './components/ScrollToTop';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '72px',
        marginBottom: '72px',
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },

    logo: {
        fontSize: '35px',
        fontWeight: 'bold',
    },
    navList: {
        listStyleType: 'none',
        textAlign: 'right',
    },
}));

function App() {
    const classes = {
        root: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '72px',
            marginBottom: '72px',
        },


        logo: {
            fontSize: '35px',
            fontWeight: 'bold',
        },
        navList: {
            listStyleType: 'none',
            textAlign: 'right',
        },
    }
    const theme = createTheme()
    return (
        <ThemeProvider theme={theme}>
            <div className="section">
                <Grid
                    container
                    direction="row"
                    alignContent="center"
                    className={classes.root}
                >
                    <Grid item xs={1} className={classes.logo}>
                        CF.
                    </Grid>

                    <Grid item xs={12} md={11} className={classes.navigation}>
                        <ul className={classes.navList}>
                            <li className="navlinks">
                            </li>
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

                {/* <Landing /> */}
                <ScrollToTop />
                {/* <div id="projects">
                <Projects />
            </div> */}
                <div id="about">
                    <About />
                </div>
                <div id="contact">
                    <Contact />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
