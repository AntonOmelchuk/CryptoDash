import React from 'react';
import {
  ChangePercentStyled,
  JustifyLeft,
  JustifyRight,
  PriceTileStyled,
  TickerPrice,
} from './priceTile.style';
import {CoinHeaderGridStyled} from '../../Settings/Coins/coins.style';
import {AppContext} from '../../App/AppProvider';

const ChangePercent = ({data}) => (
  <JustifyRight>
    <ChangePercentStyled red={data.CHANGEPCT24HOUR < 0}>
      {data.CHANGEPCT24HOUR.toFixed(7)}
    </ChangePercentStyled>
  </JustifyRight>
);

const PriceTile = ({sym, data, currentFavorite, setCurrentFavorite}) => (
  <PriceTileStyled
    currentFavorite={currentFavorite}
    onClick={() => setCurrentFavorite(sym)}
  >
    <CoinHeaderGridStyled>
      <div>{sym}</div>
      <ChangePercent data={data} />
    </CoinHeaderGridStyled>
    <TickerPrice>${data.PRICE.toFixed(2)}</TickerPrice>
  </PriceTileStyled>
);

const PriceTileCompact = ({sym, data, currentFavorite, setCurrentFavorite}) => (
  <PriceTileStyled
    compact
    currentFavorite={currentFavorite}
    onClick={() => setCurrentFavorite(sym)}
  >
    <JustifyLeft>{sym}</JustifyLeft>
    <ChangePercent data={data} />
    <div>${data.PRICE.toFixed(2)}</div>
  </PriceTileStyled>
);

export default ({price, index}) => {
  const sym = Object.keys(price)[0];
  const data = price[sym]['USD'];
  const TileClass = index < 5 ? PriceTile : PriceTileCompact;

  return (
    <AppContext.Consumer>
      {({currentFavorite, setCurrentFavorite}) => (
        <TileClass
          data={data}
          sym={sym}
          currentFavorite={currentFavorite === sym}
          setCurrentFavorite={setCurrentFavorite}
        />
      )}
    </AppContext.Consumer>
  );
};
