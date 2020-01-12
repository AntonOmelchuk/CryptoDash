import React from 'react';
import {CoinsGrid} from './coins.style';
import {AppContext} from '../../App/AppProvider';
import CoinTile from "./CoinTile";

const getCoinsToDisplay = (coinList, topSection) => {
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
};

const Coins = ({topSection}) => {
  return (
    <AppContext.Consumer>
      {({coinList}) => (
        <CoinsGrid>
          {getCoinsToDisplay(coinList, topSection).map((coinKey) => (
            <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection} />
          ))}
        </CoinsGrid>
      )}
    </AppContext.Consumer>
  );
};

export default Coins;
