import React from 'react';
import PropTypes from 'prop-types';

const VisualPickerCaption = ({ children, title }) => (
  <span className="slds-visual-picker__body">
    {title && (
      <span className="slds-text-heading_small">{title}</span>
    )}
    <span className="slds-text-title">{children}</span>
  </span>
);

VisualPickerCaption.defaultProps = {
  title: null,
};

VisualPickerCaption.propTypes = {
  /**
   * Text content of the caption
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional title rendered as `heading_small`
   */
  title: PropTypes.string,
};

export default VisualPickerCaption;
