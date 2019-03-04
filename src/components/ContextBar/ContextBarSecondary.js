import React from 'react';
import PropTypes from 'prop-types';

const ContextBarSecondary = ({ children }) => (
  <nav className="slds-context-bar__secondary" role="navigation">
    <ul className="slds-grid">
      {React.Children.map(children, child => React.cloneElement(child, { as: 'li' }))}
    </ul>
  </nav>
);

ContextBarSecondary.defaultProps = {
  children: null,
};

ContextBarSecondary.propTypes = {
  children: PropTypes.node,
};

export default ContextBarSecondary;
