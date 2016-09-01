import React from 'react';
import Navigation from '../Navigation';

let basePath = '/';

if (!module.hot) {
  basePath = 'https://propertybase.github.io/react-lds/';
}

class Page extends React.Component {
  getChildContext() {
    return {
      assetBasePath: basePath,
      cssPrefix: 'slds-',
    };
  }

  render() {
    return (
      <div>
        <header className="site-banner" role="banner" />
        <main className="site-main" role="main">{this.props.children}</main>
        <Navigation />
      </div>
    );
  }
}

Page.propTypes = {
  children: React.PropTypes.node,
};

Page.childContextTypes = {
  assetBasePath: React.PropTypes.string,
  cssPrefix: React.PropTypes.string,
};


export default Page;
