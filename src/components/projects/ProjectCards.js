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
} from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        minWidth: 302,
        minHeight: 460,
    },
    cardContent: {},
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
    box: {
        display: 'flex',
        justifyContent: 'center',
        height: 211,
        marginBottom: '20px',
        backgroundColor: '#443F3F',
    },
});
const ProjectCards = ({ title, description }) => {
    const classes = useStyles();

    return (
        <Grid item md={4} xs={12}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.title} gutterBottom>
                        {title}
                    </Typography>
                    <Box className={classes.box}></Box>

                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Built with
                        <br />
                        Stuff
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" variant="contained">
                        Learn More
                    </Button>
                    <Button size="small" variant="contained">
                        Live Site
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProjectCards;
