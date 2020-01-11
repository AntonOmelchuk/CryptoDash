import React from 'react';

import {ControlButtonElement, Logo, NavbarContainer} from './navbar.style';

const ControlButton = ({name}) => {

    return (
        <ControlButtonElement>
            {toProperCase(name)}
        </ControlButtonElement>
    )
};

const toProperCase = name => {
    return name.charAt(0).toUpperCase() + name.substr(1);
};

const Navbar = () => {

  return (
    <NavbarContainer>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton name='dashboard' />
      <ControlButton name='settings' />
    </NavbarContainer>
  );
};

export default Navbar;
