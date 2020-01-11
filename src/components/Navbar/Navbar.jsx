import React from 'react';

import {ControlButtonElement, Logo, NavbarContainer} from './navbar.style';

import {AppContext} from '../App/AppProvider';

const ControlButton = ({name}) => {

    return (
        <AppContext.Consumer>
            {({page, setPage}) => (
                <ControlButtonElement active={page === name} onClick={() => setPage(name)} >
                    {toProperCase(name)}
                </ControlButtonElement>
            )}
        </AppContext.Consumer>
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
