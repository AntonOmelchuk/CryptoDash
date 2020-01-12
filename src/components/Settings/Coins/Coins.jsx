import React from 'react';
import {CoinsGrid} from './coins.style';
import {AppContext} from '../../App/AppProvider';
import CoinTile from "./CoinTile";

const getCoinsToDisplay = coinList => {
  return Object.keys(coinList).slice(0, 100);
};

const Coins = () => {
  return (
    <AppContext.Consumer>
      {({coinList}) => (
        <CoinsGrid>
          {getCoinsToDisplay(coinList).map(coinKey => (
            <CoinTile key={coinKey} coinKey={coinKey}    />
          ))}
        </CoinsGrid>
      )}
    </AppContext.Consumer>
  );
};

export default Coins;
