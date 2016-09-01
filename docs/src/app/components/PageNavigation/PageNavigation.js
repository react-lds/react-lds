import React from 'react';

const PageNavigation = ({ children }) =>
  <div className="site-menu--jump-links">
    <h3 className="site-text-heading--label">Variants & States</h3>
    <ul className="slds-list--vertical slds-has-block-links--space">
      {children}
    </ul>
  </div>;

PageNavigation.propTypes = {
  children: React.PropTypes.node,
};

export default PageNavigation;
