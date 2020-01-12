import React from 'react';
import {AppContext} from '../../App/AppProvider';
import {DeletableTile, SelectedTile} from '../../Shared/tile.style';
import {CoinHeaderGridStyled, CoinSymbol, DeleteIcon} from './coins.style';
import CoinImage from '../../Shared/CoinImage';

const CoinTile = ({coinKey, topSection}) => {
  return (
    <AppContext.Consumer>
      {({coinList}) => {
        const coin = coinList[coinKey];

        let TileClass = SelectedTile;
        if (topSection) TileClass = DeletableTile;

        return (
          <TileClass>
            <CoinHeaderGridStyled>
              <div>{coin.CoinName}</div>
              {topSection ? (
                <DeleteIcon>X</DeleteIcon>
              ) : (
                <CoinSymbol>{coin.Symbol}</CoinSymbol>
              )}
            </CoinHeaderGridStyled>
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
};

export default CoinTile;
