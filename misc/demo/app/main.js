import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import Navigation from "./navigation";
import PageHeaders from "./pageHeaders";

require('./main.scss');

class DemoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      assetBasePath: ''
    }
  }

  render() {
    return(
      <div>
        <header className="site-banner" role="banner"></header>
        <main className="site-main" role="main">{this.props.children}</main>
        <Navigation />
      </div>
    );
  }
}

DemoApp.childContextTypes = {
  assetBasePath: React.PropTypes.string
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={DemoApp}>
      <Route path="/page-headers" component={PageHeaders}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
