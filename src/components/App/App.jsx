import React from 'react';

import {GlobalStyle} from '../../global.styles';
import {AppContainer} from './app.style';

import Navbar from '../Navbar/Navbar';
import Settings from '../Settings';
import AppProvider from './AppProvider';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <AppProvider>
          <Navbar />
          <Content>
            <Settings />
            <Dashboard />
          </Content>
        </AppProvider>
      </AppContainer>
    </>
  );
};

export default App;
