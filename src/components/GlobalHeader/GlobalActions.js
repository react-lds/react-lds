import React from 'react';
import PropTypes from 'prop-types';

const GlobalActions = ({ children }) => (
  <ul className="slds-global-actions">
    {children}
  </ul>
);

GlobalActions.defaultProps = {
  children: null,
};

GlobalActions.propTypes = {
  children: PropTypes.node,
};

export default GlobalActions;
