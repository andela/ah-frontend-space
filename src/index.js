import React from 'react';
import { render } from 'react-dom';

const greeting = 'Welcome to Authors Haven';

const Greet = () => <h1>{ greeting }</h1>;

render(
  <Greet />, document.getElementById('root'),
);
