import React from 'react';
import ReactDOM from 'react-dom';

import DemoApp from './DemoApp';

require('./main.scss');

const rootEl = document.getElementById('app');

ReactDOM.render(
  <DemoApp />, rootEl
);

if (module.hot) {
  module.hot.accept('./DemoApp', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    // eslint-disable-next-line
    const NextApp = require('./DemoApp').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
