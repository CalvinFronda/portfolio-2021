import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Box,
  Typography,
  CardMedia,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
const PREFIX = "ProjectCards";

const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  pos: `${PREFIX}-pos`,
  cardActions: `${PREFIX}-cardActions`,
  projectImage: `${PREFIX}-projectImage`,
  btnStyle: `${PREFIX}-btnStyle`,
};

const StyledGrid = styled(Grid)({
  [`& .${classes.root}`]: {
    minHeight: 680,
    backgroundColor: "#C4C4C4",
  },

  [`& .${classes.title}`]: {
    fontSize: 42,
    textAlign: "center",
  },
  [`& .${classes.pos}`]: {
    marginBottom: 12,
  },
  [`& .${classes.cardActions}`]: {
    display: "flex",
    justifyContent: "center",
  },

  [`& .${classes.projectImage}`]: {
    height: "265px",
  },

  [`& .${classes.btnStyle}`]: {
    backgroundColor: "#545050",
    borderRadius: "20px",
    fontSize: "18px",
    padding: "9px",
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
  return (
    <StyledGrid size={{ xs: 12, md: 4 }}>
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
          <Typography> {techUsed.join(", ")}</Typography>
          <Box p={3}>
            <ul>
              {description.map((content) => (
                <li style={{ paddingBottom: "7px" }}>
                  <Typography variant="body1">{content}</Typography>
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
    </StyledGrid>
  );
};

export default ProjectCards;
