import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";

// Define what props.theme will look like
const theme = {
  primaryColor: '#837d9b',
  secondaryColors: '#f8dd52',
  boardRaidus: '2px',
  borderColor: '#999999',
  containerInnerSpacing: '4rem 0', 
  font: {
      color: '#333333',
      inverseColor: 'white',
      colors: {
          grey: '#a8a8a8'
      },
      face: {
          brand: `'Press Start 2P', cursive`,
          header: `'Cousine', monospace`,
          text: `'Open Sans', sans-serif`
      }
  },
  container: {
      maxWidth: '1000px',
      width: '90%',
  }
};


const WithProviders = () => (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);



ReactDOM.render(<WithProviders />, document.getElementById('root'));
