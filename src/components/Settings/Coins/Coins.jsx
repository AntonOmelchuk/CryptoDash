import React from 'react';
import {CoinsGrid} from './coins.style';
import {AppContext} from '../../App/AppProvider';
import CoinTile from './CoinTile';

const getCoinsToDisplay = (coinList, topSection, favorites) => {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
};

const Coins = ({topSection}) => {
  return (
    <AppContext.Consumer>
      {({coinList, favorites}) => (
        <CoinsGrid>
          {getCoinsToDisplay(coinList, topSection, favorites).map(coinKey => (
            <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection} />
          ))}
        </CoinsGrid>
      )}
    </AppContext.Consumer>
  );
};

export default Coins;
