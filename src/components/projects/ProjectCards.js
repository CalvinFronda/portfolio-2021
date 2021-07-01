import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardActions,
    CardContent,
    Button,
    Box,
    Typography,
    CardMedia,
} from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        minHeight: 680,
        backgroundColor: '#C4C4C4',
    },

    title: {
        fontSize: 42,
        textAlign: 'center',
    },
    pos: {
        marginBottom: 12,
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
    },

    projectImage: {
        height: '265px',
    },

    btnStyle: {
        backgroundColor: '#545050',
        borderRadius: '20px',
        fontSize: '18px',
        padding: '9px',
    },
});
const ProjectCards = ({
    title,
    description,
    image,
    techUsed,
    github,
    liveSite,
}) => {
    const classes = useStyles();

    return (
        <Grid item md={4} xs={12}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.title} gutterBottom>
                        {title}
                    </Typography>

                    <CardMedia
                        className={classes.projectImage}
                        component="img"
                        src={image}
                    />
                    <br />
                    <Typography variant="h6">Technologies used</Typography>
                    <Typography> {techUsed.join(', ')}</Typography>
                    <Box p={3}>
                        <ul>
                            {description.map((content) => (
                                <li style={{ paddingBottom: '7px' }}>
                                    <Typography variant="body1">
                                        {content}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    {github && (
                        <Button className={classes.btnStyle}>
                            <a href={github} target="_blank" rel="noreferrer">
                                Github
                            </a>
                        </Button>
                    )}
                    {liveSite && (
                        <Button className={classes.btnStyle}>
                            <a href={liveSite} target="_blank" rel="noreferrer">
                                Live Site
                            </a>
                        </Button>
                    )}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProjectCards;
