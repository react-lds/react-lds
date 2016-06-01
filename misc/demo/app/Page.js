import React from 'react';
import ReactDom from 'react-dom';

import Navigation from "./Navigation";

class Page extends React.Component {
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

Page.childContextTypes = {
  assetBasePath: React.PropTypes.string
};


export default Page;
