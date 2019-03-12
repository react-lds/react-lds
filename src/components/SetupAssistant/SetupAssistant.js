import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const SetupAssistant = ({ children, className, ...rest }) => (
  <ol className={cx('slds-setup-assistant', className)} {...rest}>{children}</ol>
);

SetupAssistant.defaultProps = {
  children: null,
  className: null,
};

SetupAssistant.propTypes = {
  /**
   * Assistant content
   */
  children: PropTypes.node,
  /**
   * Additional className
   */
  className: PropTypes.string,
};

export default SetupAssistant;
