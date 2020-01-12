import styled from 'styled-components';
import {fontSize1, greenBoxShadow, color3} from '../../Shared/styles';

export const ConfirmButtonStyled = styled.div`
  margin: 20px;
  padding: 5px;
  ${fontSize1};
  cursor: pointer;
  color: ${color3};
  
  &:hover {
    ${greenBoxShadow};
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;
