import React from 'react';
import {PriceGrid} from './prices.style';
import {AppContext} from '../../App/AppProvider';
import PriceTile from '../PriceTile/PriceTile';

const Prices = () => {
  return (
    <AppContext.Consumer>
      {({prices}) => (
        <PriceGrid>
          {prices.map((price, i) => (
            <PriceTile key={i} index={i} price={price} />
          ))}
        </PriceGrid>
      )}
    </AppContext.Consumer>
  );
};

export default Prices;
