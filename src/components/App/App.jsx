import React from 'react';

import {GlobalStyle} from '../../global.styles';
import {AppContainer} from './app.style';

import Navbar from '../Navbar/Navbar';
import Settings from '../Settings';
import AppProvider from './AppProvider';
import Content from '../Shared/Content';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <AppProvider>
          <Navbar />
          <Content>
            <Settings />
          </Content>
        </AppProvider>
      </AppContainer>
    </>
  );
};

export default App;
