import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
