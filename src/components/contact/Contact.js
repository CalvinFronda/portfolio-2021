import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import ContactFrom from './ContactForm';
const useStyles = makeStyles({
    root: {
        marginBottom: '72px',
    },
    heading: {
        fontSize: '42px',
    },
    links: {
        listStyleType: 'none',
    },
    link: {
        marginBottom: '5em',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        height: 640,
        marginBottom: '20px',
        backgroundColor: '#443F3F',
    },
});

const Contact = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" spacing={4} className={classes.root}>
            <Grid item xs={12} className={classes.heading}>
                Get in touch
            </Grid>
            <Grid item xs={12} md={6} className={classes.contactForm}>
                <ContactFrom />
            </Grid>
            <Grid item xs={12} md={6} align="center">
                <ul className={classes.links}>
                    <li className={classes.link}>
                        <a
                            href="https://drive.google.com/file/d/1Kx6pDDDChIV10FZZqddV7BTv5bKLqeSH/view?usp=sharing"
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
        </Grid>
    );
};

export default Contact;
