import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

let basePath = '/';

if (!module.hot) {
  basePath = '//propertybase.github.io/react-lds/';
}

class Page extends React.Component {
  getChildContext() {
    return {
      assetBasePath: basePath,
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
  children: PropTypes.node,
};

Page.childContextTypes = {
  assetBasePath: PropTypes.string,
};


export default Page;
