import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ProjectCards from './ProjectCards';
const useStyles = makeStyles({
    root: {
        paddingTop: '72px',
        paddingBottom: '72px',
    },
    heading: {
        fontSize: '42px',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const projectList = [
    {
        title: 'Omou',
        description: 'Testing 123',
    },
    {
        title: 'Github Finder',
        description: 'Testing 123',
    },
    {
        title: 'Chatter',
        description: 'Testing 123',
    },
];

const Projects = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" spacing={4} className={classes.root}>
            <Grid item xs={12} className={classes.heading}>
                Projects
            </Grid>
            <Grid container direction="row" spacing={4}>
                {projectList.map((props, i) => (
                    <ProjectCards {...props} key={i} />
                ))}
            </Grid>
        </Grid>
    );
};

export default Projects;
