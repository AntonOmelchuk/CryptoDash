import styled, {css} from 'styled-components';

export const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;

export const Logo = styled.div`
  font-size: 1.5em;
`;

export const ControlButtonElement = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0 0 60px #03ff03;
    `}
`;
