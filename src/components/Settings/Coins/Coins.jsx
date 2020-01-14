import React from 'react';
import {CoinsGrid} from './coins.style';
import {AppContext} from '../../App/AppProvider';
import CoinTile from './CoinTile';

const getLowerSectionCoins = (filteredCoins, coinList) => {
  return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList)
};

const getCoinsToDisplay = (coinList, topSection, favorites, filteredCoins) => {
  return topSection ? favorites : getLowerSectionCoins(filteredCoins, coinList).slice(0, 100)
};

const Coins = ({topSection}) => {
  return (
    <AppContext.Consumer>
      {({coinList, favorites, filteredCoins}) => (
        <CoinsGrid>
          {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey => (
            <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection} />
          ))}
        </CoinsGrid>
      )}
    </AppContext.Consumer>
  );
};

export default Coins;
