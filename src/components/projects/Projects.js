import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ProjectCards from './ProjectCards';
import omouPicture from '../../assets/images/omouhomepage.png';
import githubFinder from '../../assets/images/githubfinder.png';
import wemakebread from '../../assets/images/wemakebread.png';

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
        image: omouPicture,
        techUsed: ['React', 'Material-UI', 'GraphQL', 'Redux'],
        description: [
            'Built with React functional components, Redux state management and GraphQL.',
            'Modern adminstrative portal to easily manage students, instructors and receptionist.',
            'Integration with google classroom to easily onboard existing courses.',
        ],
        liveSite: 'https://www.getomou.com/',
    },
    {
        title: 'Github Finder',
        image: githubFinder,
        techUsed: ['React', 'Custom Components', 'Netlify', 'Github API'],
        description: [
            'React app that consumes the Github API to fetch profile data on searched user.',
            'Responsive design with custom css breakpoints and properties.',
            'Utilizes React context to handle application state and actions.',
        ],
        github: 'https://github.com/CalvinFronda/github-finder',
        liveSite: 'https://githubfinder4783156.netlify.app/',
    },
    {
        title: 'WeMakeBread',
        image: wemakebread,
        techUsed: ['React', 'Material-UI', 'AWS s3', 'Strapi'],
        description: [
            'Responsive hobby website to display different types of baked goods.',
            'Uses Strapi, an open sources node.js CMS to handle uploading and managing content.',
            'Images hosting on AWS s3 and served through AWS cloudfront as the CDN.',
        ],
        github: 'https://github.com/CalvinFronda/tcbakery',
        liveSite: 'https://www.wemakebread.com/',
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
