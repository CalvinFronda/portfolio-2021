import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 'calc(30px + 1vw)',
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
