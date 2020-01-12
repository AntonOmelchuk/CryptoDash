import React from 'react';
import {CoinsGrid} from './coins.style';
import {SelectedTile} from '../../Shared/tile.style';
import {AppContext} from '../../App/AppProvider';

const Coins = () => {
  return (
    <AppContext.Consumer>
      {({coinList}) => (
        <CoinsGrid>
          {Object.keys(coinList).map(coinKey => (
            <div key={coinKey}>
              <SelectedTile>{coinKey}</SelectedTile>
            </div>
          ))}
        </CoinsGrid>
      )}
    </AppContext.Consumer>
  );
};

export default Coins;
