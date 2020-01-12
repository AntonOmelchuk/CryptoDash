import styled from 'styled-components';
import {backgroundColor2, fontSize2} from '../../Shared/styles';

export const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export const SearchInput = styled.input`
  ${backgroundColor2};
  border: 1px solid;
  height: 25px;
  ${fontSize2};
  color: #1163c9;
  place-self: center left;
`;
