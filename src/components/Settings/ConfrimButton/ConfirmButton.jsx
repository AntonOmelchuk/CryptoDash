import React from 'react';

import {CenterDiv, ConfirmButtonStyled} from './confirmButton.style';

import {AppContext} from '../../App/AppProvider';

const ConfirmButton = () => {
  return (
    <AppContext.Consumer>
      {({confirmFavorites}) => (
          <CenterDiv>
            <ConfirmButtonStyled onClick={confirmFavorites}>
              Confirm Favorites
            </ConfirmButtonStyled>
          </CenterDiv>
      )}
    </AppContext.Consumer>
  );
};

export default ConfirmButton;
