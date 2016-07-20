import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import Page from './Page';
import DataTable from './pages/DataTable';
import GridSystem from './pages/GridSystem';
import PageHeader from './pages/PageHeader';
import Icons from './pages/Icon';
import MediaObject from './pages/MediaObject';
import Modals from './pages/Modals';
import Buttons from './pages/Button';
import ButtonGroups from './pages/ButtonGroup';
import Badges from './pages/Badge';
import Breadcrumb from './pages/Breadcrumb';
import Spinners from './pages/Spinners';
import Menu from './pages/Menu';
import Images from './pages/Images';
import Notifications from './pages/Notifications';
import Tabs from './pages/Tab';
import Cards from './pages/Card';
import Forms from './pages/Form';
import InputVariants from './pages/Form/Input';
import TextareaVariants from './pages/Form/Textarea';
import Radio from './pages/Form/Radio';

const DemoApp = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <Route path="data-tables" component={DataTable} />
      <Route path="grid-system" component={GridSystem} />
      <Route path="icons" component={Icons} />
      <Route path="buttons" component={Buttons} />
      <Route path="button-groups" component={ButtonGroups} />
      <Route path="badges" component={Badges} />
      <Route path="page-headers" component={PageHeader} />
      <Route path="media-objects" component={MediaObject} />
      <Route path="breadcrumbs" component={Breadcrumb} />
      <Route path="spinners" component={Spinners} />
      <Route path="menus" component={Menu} />
      <Route path="images" component={Images} />
      <Route path="modals" component={Modals} />
      <Route path="notifications" component={Notifications} />
      <Route path="tabs" component={Tabs} />
      <Route path="cards" component={Cards} />
      <Route path="forms" component={Forms}>
        <IndexRedirect to="input" />
        <Route path="input">
          <IndexRedirect to="default" />
          <Route path=":exampleId" component={InputVariants} />
        </Route>
        <Route path="textarea">
          <IndexRedirect to="default" />
          <Route path=":exampleId" component={TextareaVariants} />
        </Route>
        <Route path="radio" component={Radio} />
      </Route>
    </Route>
  </Router>;

export default DemoApp;
