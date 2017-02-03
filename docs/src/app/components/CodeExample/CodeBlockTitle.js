import React, { PropTypes } from 'react';

const CodeBlockTitle = props => (
  <div
    className="slds-grid
    slds-grid--vertical-align-center
    slds-p-around--small slds-p-left--medium
    slds-border--bottom"
  >
    <div className="slds-text-heading--medium">{props.title || 'Example'}</div>
    <div className="slds-text-heading--label slds-m-left--medium">{props.tooltip}</div>
  </div>
);

CodeBlockTitle.propTypes = {
  title: PropTypes.string,
  tooltip: PropTypes.string,
};

export default CodeBlockTitle;
