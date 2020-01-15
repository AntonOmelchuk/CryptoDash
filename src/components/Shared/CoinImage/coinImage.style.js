import styled, {css} from 'styled-components';

export const CoinImageStyled = styled.img`
  height: 50px;

  ${props =>
    props.spotlight &&
    css`
      height: 200px;
      display: block;
      margin: auto;
    `};
`;
