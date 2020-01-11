import React from 'react';

import {GlobalStyle} from '../../global.styles';
import {AppContainer} from './app.style';

import Navbar from '../Navbar/Navbar';
import AppProvider from "./AppProvider";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
          <AppProvider>
              <Navbar />
              <h3>Crypto Dash</h3>
          </AppProvider>
      </AppContainer>
    </>
  );
};

export default App;
