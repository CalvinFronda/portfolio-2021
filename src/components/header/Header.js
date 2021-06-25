import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
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
        textAlign: 'center',
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
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
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="navlinks">
                        <a href="#about">About</a>
                    </li>
                    <li className="navlinks">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </Grid>
        </Grid>
    );
};

export default Header;
