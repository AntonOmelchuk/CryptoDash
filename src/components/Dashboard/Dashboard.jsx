import React from 'react';

import Page from '../Shared/Page';
import Prices from './Price/Prices';
import CoinSpotlight from './CoinSpoplight/CoinSpotlight';
import {ChartGrid} from './dashboard.style';
import PriceChart from "./PriceChart/PriceChart";

const Dashboard = () => {
  return (
    <Page name='dashboard'>
      <Prices />
      <ChartGrid>
        <CoinSpotlight />
        <PriceChart />
      </ChartGrid>
    </Page>
  );
};

export default Dashboard;
