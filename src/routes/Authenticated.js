import React from 'react';
import { Redirect } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const Authenticated = Component => props => (sessionStorage.getItem('isLoggedIn')
  ? <Component {...props} />
  : <Redirect to="/signin" />
);
