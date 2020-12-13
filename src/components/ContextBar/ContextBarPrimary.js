import React from 'react';
import PropTypes from 'prop-types';

const ContextBarPrimary = ({ children }) => (
  <div className="slds-context-bar__primary">
    {React.Children.map(children, child => React.cloneElement(child, { as: 'div' }))}
  </div>
);

ContextBarPrimary.defaultProps = {
  children: null,
};

ContextBarPrimary.propTypes = {
  children: PropTypes.node,
};

export default ContextBarPrimary;
