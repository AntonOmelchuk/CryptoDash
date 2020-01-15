import React from 'react';
import {Tile} from '../../Shared/tile.style';
import {SpotlightName} from './spotlight.style';
import CoinImage from '../../Shared/CoinImage/CoinImage';
import {AppContext} from '../../App/AppProvider';

const CoinSpotlight = () => {
  return (
    <AppContext.Consumer>
      {({currentFavorite, coinList}) => (
        <Tile>
          <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
          <CoinImage coin={coinList[currentFavorite]} spotlight />
        </Tile>
      )}
    </AppContext.Consumer>
  );
};

export default CoinSpotlight;
