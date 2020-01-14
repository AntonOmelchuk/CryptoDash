import React from 'react';
import {
  ChangePercentStyled,
  JustifyLeft,
  JustifyRight,
  PriceTileStyled,
  TickerPrice,
} from './priceTile.style';
import {CoinHeaderGridStyled} from '../../Settings/Coins/coins.style';

const ChangePercent = ({data}) => (
  <JustifyRight>
    <ChangePercentStyled red={data.CHANGEPCT24HOUR < 0}>
      {data.CHANGEPCT24HOUR.toFixed(7)}
    </ChangePercentStyled>
  </JustifyRight>
);

const PriceTile = ({sym, data}) => (
  <PriceTileStyled>
    <CoinHeaderGridStyled>
      <div>{sym}</div>
      <ChangePercent data={data} />
    </CoinHeaderGridStyled>
    <TickerPrice>${data.PRICE.toFixed(7)}</TickerPrice>
  </PriceTileStyled>
);

const PriceTileCompact = ({sym, data}) => (
  <PriceTileStyled compact>
    <JustifyLeft>{sym}</JustifyLeft>
    <ChangePercent data={data} />
    <div>${data.PRICE.toFixed(7)}</div>
  </PriceTileStyled>
);

export default ({price, index}) => {
  const sym = Object.keys(price)[0];
  const data = price[sym]['USD'];
  const TileClass = index < 5 ? PriceTile : PriceTileCompact;

  return (
    <TileClass data={data} sym={sym}>
      {sym} {data.PRICE}
    </TileClass>
  );
};
