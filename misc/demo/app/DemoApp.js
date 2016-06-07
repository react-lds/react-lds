import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Page from './Page';
import GridSystem from './pages/GridSystem';
import PageHeader from './pages/PageHeader';
import Icons from './pages/Icon';
import MediaObject from './pages/MediaObject';
import Buttons from './pages/Button';
import Badges from './pages/Badge';

const DemoApp = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <Route path="/grid-system" component={GridSystem} />
      <Route path="/icons" component={Icons} />
      <Route path="/buttons" component={Buttons} />
      <Route path="/badges" component={Badges} />
      <Route path="/page-headers" component={PageHeader} />
      <Route path="/media-objects" component={MediaObject} />
    </Route>
  </Router>;

export default DemoApp;
