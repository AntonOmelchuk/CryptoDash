import React from 'react';

import Page from '../Shared/Page';
import Prices from './Price/Prices';
import CoinSpotlight from './CoinSpoplight/CoinSpotlight';
import {ChartGrid} from './dashboard.style';

const Dashboard = () => {
  return (
    <Page name='dashboard'>
      <Prices />
      <ChartGrid>
        <CoinSpotlight />
        <div>Chart goes here</div>
      </ChartGrid>
    </Page>
  );
};

export default Dashboard;
