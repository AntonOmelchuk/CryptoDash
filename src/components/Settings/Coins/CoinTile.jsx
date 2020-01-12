import React from 'react';
import {AppContext} from '../../App/AppProvider';
import {DeletableTile, DisabledTitle, SelectedTile} from '../../Shared/tile.style';
import {CoinHeaderGridStyled, CoinSymbol, DeleteIcon} from './coins.style';
import CoinImage from '../../Shared/CoinImage';

const clickCoinHandler = (coinKey, topSection, addCoin, removeCoin) => {
  return topSection ? () => removeCoin(coinKey) : () => addCoin(coinKey);
};

const CoinTile = ({coinKey, topSection}) => {
  return (
    <AppContext.Consumer>
      {({coinList, addCoin, removeCoin, isInFavorites}) => {
        const coin = coinList[coinKey];

        let TileClass = SelectedTile;

        if(topSection) {
          TileClass = DeletableTile;
        } else if(isInFavorites(coinKey)) {
          TileClass = DisabledTitle;
        }

        return (
          <TileClass
            onClick={clickCoinHandler(coinKey, topSection, addCoin, removeCoin)}
          >
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
