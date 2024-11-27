import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import ExperinceItem from './ExperienceItem';
import { experience } from './experience';

const Content = () => {
  return (
    <Box
      className="main-content__right-pane__container"
      sx={{
        overflowY: 'auto',
        p: 4,
      }}
    >
      <main className="main-content__right-pane">
        <Typography variant="h4" component="h2" gutterBottom>
          About Me
        </Typography>
        <Divider />
        <Typography variant="body1">
          I am a front-end developer with a passion for creating intuitive and
          user-friendly web applications. I have experience working with various
          JavaScript frameworks and libraries, including React, Angular, and
          Vue.js.
        </Typography>
        <Typography variant="body1">
          I’m enthusiastic about building software that helps people, eager to
          learn how to develop more robust systems, and excited to own and drive
          impactful projects. I care deeply about my work and building products
          while working directly with end users has taught me the importance of
          paying attention to the needs of the client. I focus on the details to
          help ensure we're solving the right problems in the right ways
        </Typography>
        {/* Add more content here */}

        {/* {experience.map(({ title, description, dates }, index) => (
          <ExperinceItem
            key={index}
            title={title}
            description={description}
            dates={dates}
          />
        ))}
         */}

        {[...Array(50)].map((_, index) => (
          <Typography key={index}>
            I did work here and I was able to make money {index}
          </Typography>
        ))}
      </main>
    </Box>
  );
};

export default Content;
