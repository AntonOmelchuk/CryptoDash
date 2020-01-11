import React from 'react';

import {GlobalStyle} from '../../global.styles';
import {AppContainer} from './app.style';

import Navbar from '../Navbar/Navbar';
import WelcomeMessage from '../Settings/index';
import AppProvider from "./AppProvider";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
          <AppProvider>
              <Navbar />
              <WelcomeMessage />
          </AppProvider>
      </AppContainer>
    </>
  );
};

export default App;
