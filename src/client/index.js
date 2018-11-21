import React from 'react';
import ReactDOM from 'react-dom';

import Signature from './components/Signature/Signature.jsx';

import './stylesheets/index.scss';

ReactDOM.render(
  <Signature/>,
  document.getElementById('root')
);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}