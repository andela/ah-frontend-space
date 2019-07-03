import React from 'react';
import { render } from 'react-dom';
import './index.scss';

const greeting = 'Welcome to Authors Haven';

const Greet = () => <h1 className="coloring">{ greeting }</h1>;

render(
  <Greet />, document.getElementById('root'),
);
