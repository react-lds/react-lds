import React from 'react';
import PropTypes from 'prop-types';

const GlobalHeaderContainer = ({ children }) => (
  <header className="slds-global-header_container">
    {children}
  </header>
);

GlobalHeaderContainer.defaultProps = {
  children: null,
};

GlobalHeaderContainer.propTypes = {
  children: PropTypes.node,
};

export default GlobalHeaderContainer;
