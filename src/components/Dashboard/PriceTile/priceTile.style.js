import styled, {css} from 'styled-components';
import {SelectedTile} from '../../Shared/tile.style';
import {fontSize3, fontSizeBig} from '../../Shared/styles';

export const PriceTileStyled = styled(SelectedTile)`
  ${props =>
    props.compact &&
    css`
      ${fontSize3};
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: right;
      grid-gap: 5px;
    `}
`;

export const JustifyRight = styled.div`
  justify-self: right;
`;

export const JustifyLeft = styled.div`
  justify-self: left;
`;

export const TickerPrice = styled.div`
  ${fontSizeBig}
`;

export const ChangePercentStyled = styled.div`
  color: green;
  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;
