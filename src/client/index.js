import React from 'react';
import ReactDOM from 'react-dom';

import Signature from './components/Signature/Signature';

import './stylesheets/index.scss';

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
  <Signature
    name='Kovalyuk Kirill'
  />, root);
}

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept(() => {
    render();
  });
}

render();
