import React from 'react';
import ReactDOM from 'react-dom';

import App from 'Containers/App/App';

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <App/>,
    root,
  );
};

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept(() => {
    render();
  });
}

render();
