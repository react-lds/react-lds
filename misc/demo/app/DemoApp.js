import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Page from './Page';
import PageHeaders from './PageHeaders';
import MediaObjects from './MediaObjects';

const DemoApp = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <Route path="/page-headers" component={PageHeaders} />
      <Route path="/media-objects" component={MediaObjects} />
    </Route>
  </Router>;

export default DemoApp;
