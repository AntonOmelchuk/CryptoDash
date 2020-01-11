import React from 'react';

import {ConfirmButtonStyled} from './confirmButton.style';

import {AppContext} from '../../App/AppProvider';

const ConfirmButton = () => {
  return (
    <AppContext.Consumer>
      {({confirmFavorites}) => (
        <ConfirmButtonStyled onClick={confirmFavorites}>
          Confirm Favorites
        </ConfirmButtonStyled>
      )}
    </AppContext.Consumer>
  );
};

export default ConfirmButton;
