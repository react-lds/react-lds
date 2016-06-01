import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Page from './Page';
import PageHeaders from './PageHeaders';

const DemoApp = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <Route path="/page-headers" component={PageHeaders} />
    </Route>
  </Router>;

export default DemoApp;
