import React from 'react';
import PropTypes from 'prop-types';

const SetupAssistant = ({ children }) => (
  <ol className="slds-setup-assistant">{children}</ol>
);

SetupAssistant.defaultProps = {
  children: null,
};

SetupAssistant.propTypes = {
  /**
   * Assistant content
   */
  children: PropTypes.node,
};

export default SetupAssistant;
