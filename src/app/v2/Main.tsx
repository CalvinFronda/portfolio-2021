import './App.scss';
import React from 'react';
import Header from './Header';
import { createTheme, ThemeProvider } from '@mui/system';
import { Box } from '@mui/material';

import Content from './Content';

const Main = () => {
  return (
    <Box
      className="main-content__container"
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <div className="main-content__content ">
        <Header />
        <Content />
      </div>
    </Box>
  );
};

export default Main;
