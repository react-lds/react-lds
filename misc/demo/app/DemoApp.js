import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Page from './Page';
import PageHeaders from './PageHeaders';
import Icons from './Icons';
import Buttons from './Buttons';
import MediaObjects from './MediaObjects.js';
import Badges from './Badges';

const DemoApp = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <Route path="/icons" component={Icons} />
      <Route path="/page-headers" component={PageHeaders} />
      <Route path="/buttons" component={Buttons} />
      <Route path="/media-objects" component={MediaObjects} />
      <Route path="/badges" component={Badges} />
    </Route>
  </Router>;

export default DemoApp;
