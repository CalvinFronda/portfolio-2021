import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import professionalPicture from '../../assets/images/professionalPicture.jpg';
const useStyles = makeStyles({
    root: {
        paddingTop: '72px',
        paddingBottom: '72px',
    },
    heading: {
        fontSize: '42px',
    },
    profilePic: {
        display: 'flex',
        justifyContent: 'center',
        maxHeight: 568,
        borderRadius: '50%',
    },
    topText: {
        fontWeight: 'bold',
        fontSize: '24px',
        marginBottom: '3em',
    },
    bottomText: {
        fontWeight: 'bold',
        fontSize: '24px',
    },
});

const About = () => {
    const classes = useStyles();
    return (
        <Grid container direction="row" spacing={4} className={classes.root}>
            <Grid item xs={12} className={classes.heading}>
                About me
            </Grid>
            <Grid item xs={12} md={6}>
                <img
                    className={classes.profilePic}
                    src={professionalPicture}
                    alt="personal"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography className={classes.topText}>
                    I am a frontend web developer with expert knowledge of
                    React, Javascript, HTML and CSS. I love structure and
                    following best practices when it comes to coding. I excel in
                    team enviroments from my years working in retail and
                    customer service. Currently looking for a full time position
                    as a frontend web developer.
                </Typography>
                <Typography className={classes.bottomText}>
                    Things I like to do outside of coding?
                    {<br />}I love the outdoors, so going on hikes, playing
                    sports like basketball or tennis, baking some delicious
                    breads and playing video games.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default About;
