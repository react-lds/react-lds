import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Page from './Page';
import PageHeaders from './PageHeaders';

class DemoApp extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Page}>
          <Route path="/page-headers" component={PageHeaders}/>
        </Route>
      </Router>
    );
  }
}

export default DemoApp;
