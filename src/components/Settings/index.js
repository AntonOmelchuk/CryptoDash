import React from 'react';

import Page from '../Shared/Page';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfrimButton/ConfirmButton';
import Coins from "./Coins/Coins";
import Search from "./Search/Search";

export default () => {
  return (
    <Page name='settings'>
      <WelcomeMessage />
      <Coins topSection />
      <ConfirmButton />
      <Search />
      <Coins />
    </Page>
  );
};
