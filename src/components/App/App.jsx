import React from 'react';

import {GlobalStyle} from '../../global.styles';
import {AppContainer} from './app.style';

import Navbar from '../Navbar/Navbar';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <h3>Crypto Dash</h3>
      </AppContainer>
    </>
  );
};

export default App;
