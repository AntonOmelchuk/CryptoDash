import React from 'react';
import {CoinImageStyled} from './coinImage.style';

const CoinImage = ({coin, spotlight}) => {
  return (
    <CoinImageStyled
        spotlight={spotlight}
      alt={coin.Symbol}
      src={`http://cryptocompare.com${coin.ImageUrl}`}
    />
  );
};

export default CoinImage;
