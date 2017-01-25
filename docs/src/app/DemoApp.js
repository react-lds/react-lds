import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Badges from './pages/Badge';
import Breadcrumb from './pages/Breadcrumb';
import ButtonGroups from './pages/ButtonGroup';
import Buttons from './pages/Button';
import Cards from './pages/Card';
import DataTable from './pages/DataTable';
import Datepicker from './pages/Datepicker';
import Forms from './pages/Form';
import GridSystem from './pages/GridSystem';
import Icons from './pages/Icon';
import Images from './pages/Images';
import IndexPage from './pages';
import InputVariants from './pages/Form/Input';
import Lookups from './pages/Lookups';
import MediaObject from './pages/MediaObject';
import Menu from './pages/Menu';
import Modals from './pages/Modals';
import Navigation from './pages/Navigation';
import Notifications from './pages/Notifications';
import Page from './components/Page';
import PageHeader from './pages/PageHeader';
import Pills from './pages/Pills';
import Popovers from './pages/Popovers';
import Radio from './pages/Form/Radio';
import SelectVariants from './pages/Form/Select';
import CheckboxVariants from './pages/Form/Checkbox';
import Spinners from './pages/Spinners';
import Tabs from './pages/Tab';
import TextareaVariants from './pages/Form/Textarea';

const routes = (
  <Route path="/" component={Page}>
    <IndexRoute component={IndexPage} />
    <Route path="badges" component={Badges} />
    <Route path="breadcrumbs" component={Breadcrumb} />
    <Route path="button-groups" component={ButtonGroups} />
    <Route path="buttons" component={Buttons} />
    <Route path="cards" component={Cards} />
    <Route path="data-tables" component={DataTable} />
    <Route path="datepickers" component={Datepicker} />
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
      <Route path="select">
        <IndexRedirect to="default" />
        <Route path=":exampleId" component={SelectVariants} />
      </Route>
      <Route path="checkbox">
        <IndexRedirect to="default" />
        <Route path=":exampleId" component={CheckboxVariants} />
      </Route>
    </Route>
    <Route path="grid-system" component={GridSystem} />
    <Route path="icons" component={Icons} />
    <Route path="images" component={Images} />
    <Route path="lookups" component={Lookups} />
    <Route path="media-objects" component={MediaObject} />
    <Route path="menus" component={Menu} />
    <Route path="modals" component={Modals} />
    <Route path="navigation" component={Navigation} />
    <Route path="notifications" component={Notifications} />
    <Route path="page-headers" component={PageHeader} />
    <Route path="pills" component={Pills} />
    <Route path="popovers" component={Popovers} />
    <Route path="spinners" component={Spinners} />
    <Route path="tabs" component={Tabs} />
  </Route>
);

const historyMode = module.hot ? browserHistory : hashHistory;

const DemoApp = () =>
  <Router history={historyMode} routes={routes} />;

export default DemoApp;
