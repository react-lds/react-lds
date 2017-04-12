import React from 'react';
import PropTypes from 'prop-types';

const PageNavigation = ({ children }) =>
  <div className="site-menu--jump-links">
    <h3 className="site-text-heading--label">Variants & States</h3>
    <ul className="slds-list--vertical slds-has-block-links--space">
      {children}
    </ul>
  </div>;

PageNavigation.propTypes = {
  children: PropTypes.node,
};

export default PageNavigation;
