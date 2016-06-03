import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Page from './Page';

import GridSystem from './GridSystem';
import Icons from './Icons';
import MediaObjects from './MediaObjects';
import PageHeaders from './PageHeaders';
import Buttons from './Buttons';
import Badges from './Badges';

const DemoApp = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <Route path="/grid-system" component={GridSystem} />
      <Route path="/icons" component={Icons} />
      <Route path="/media-objects" component={MediaObjects} />
      <Route path="/page-headers" component={PageHeaders} />
      <Route path="/buttons" component={Buttons} />
      <Route path="/badges" component={Badges} />
    </Route>
  </Router>;

export default DemoApp;
