import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import professionalPicture from '../../assets/images/calvin-2021-profilepic.jpg';
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
        objectFit: 'cover',
        maxHeight: 580,
        maxWidth: 580,
        width: '100%',
        height: 'auto',
        borderRadius: '50%',
    },
    topText: {
        
        fontSize: '24px',
        marginBottom: '3em',
    },
    bottomText: {
        
        fontSize: '24px',
    },
});

const About = () => {
    const classes = useStyles();
    return (
        <Grid container direction="row" spacing={4} className={classes.root}>
            <Grid item xs={12} md={6}>
                <img
                    className={classes.profilePic}
                    src={professionalPicture}
                    alt="personal"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography className={classes.topText}>
                    Building products and working with users has taught me to
                    pay attention to detail and care deeply about my work. As a
                    result, I’m enthusiastic about building software that helps
                    people, eager to learn how to develop more robust systems,
                    and excited to own impactful projects.
                </Typography>
                <Typography className={classes.bottomText}>
                    On the weekends, I try to find something exciting to do
                    outdoors, whether going mountain bike riding, playing
                    sports, or spending some time at amusement parks. When I
                    can’t go outside, I learn new recipes and bake (hopefully)
                    delicious pastries.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default About;
