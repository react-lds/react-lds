import React from 'react';
import PropTypes from 'prop-types';

const GlobalHeader = ({ children }) => (
  <div className="slds-global-header slds-grid slds-grid_align-spread">
    {children}
  </div>
);

GlobalHeader.defaultProps = {
  children: null,
};

GlobalHeader.propTypes = {
  children: PropTypes.node,
};

export default GlobalHeader;
