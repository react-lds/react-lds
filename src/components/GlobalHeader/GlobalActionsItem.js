import React from 'react';
import PropTypes from 'prop-types';

const GlobalActionsItem = ({ children }) => (
  <li className="slds-global-actions__item">
    {children}
  </li>
);

GlobalActionsItem.defaultProps = {
  children: null,
};

GlobalActionsItem.propTypes = {
  children: PropTypes.node,
};

export default GlobalActionsItem;
