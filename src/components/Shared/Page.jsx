import React from 'react';
import {AppContext} from '../App/AppProvider';

export default ({name, children}) => {
  return (
    <AppContext>
      {({page}) => {
        if(page !== name) return null;
        return <div>{children}</div>;
      }}
    </AppContext>
  );
};
