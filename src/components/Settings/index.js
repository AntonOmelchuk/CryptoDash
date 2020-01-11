import React from 'react';

import Page from '../Shared/Page';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfrimButton/ConfirmButton';
import Coins from "./Coins/Coins";

export default () => {
  return (
    <Page name='settings'>
      <WelcomeMessage />
      <ConfirmButton />
      <Coins />
    </Page>
  );
};
