import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';

const IconOnlyBadge = ({ children, title, ...rest }) => (
  <Badge title={title} {...rest}>
    {children}
    <span className="slds-assistive-text">{title}</span>
  </Badge>
);

IconOnlyBadge.propTypes = {
  /** The Icon to display */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  /** Description of the Icon */
  title: PropTypes.string.isRequired,
};

export default IconOnlyBadge;
