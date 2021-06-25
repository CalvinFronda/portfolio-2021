import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '42px',
        paddingTop: '72px',
        paddingBottom: '72px',
    },
}));

const Landing = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid item xs={12}>
                Hello!
            </Grid>
            <Grid item xs={12} md={10}>
                My name is Calvin Fronda and I am a frontend web developer based
                in Los Angeles. Looking to use my expertise in retail and
                customer services to build beautiful, responsive and functional
                applications
            </Grid>
        </Grid>
    );
};

export default Landing;
