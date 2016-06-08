import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Page from './Page';
import DataTable from './pages/DataTable';
import GridSystem from './pages/GridSystem';
import PageHeader from './pages/PageHeader';
import Icons from './pages/Icon';
import MediaObject from './pages/MediaObject';
import Buttons from './pages/Button';
import Badges from './pages/Badge';
import Breadcrumb from './pages/Breadcrumb';
import Spinners from './pages/Spinners';

const DemoApp = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <Route path="/data-tables" component={DataTable} />
      <Route path="/grid-system" component={GridSystem} />
      <Route path="/icons" component={Icons} />
      <Route path="/buttons" component={Buttons} />
      <Route path="/badges" component={Badges} />
      <Route path="/page-headers" component={PageHeader} />
      <Route path="/media-objects" component={MediaObject} />
      <Route path="/breadcrumbs" component={Breadcrumb} />
      <Route path="/spinners" component={Spinners} />
    </Route>
  </Router>;

export default DemoApp;
