import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ModalFooter = (props) => {
  const { children, className, defaultTheme, directional, ...rest } = props;

  const sldsClasses = [
    'slds-modal__footer',
    { 'slds-theme_default': !!defaultTheme },
    { 'slds-modal__footer_directional': !!directional },
    className
  ];

  return (<div {...rest} className={cx(sldsClasses)}>{children}</div>);
};

ModalFooter.defaultProps = {
  className: null,
  defaultTheme: false,
  directional: false,
};

ModalFooter.propTypes = {
  /**
   * modal footer content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * renders the footer with `theme_default`
   */
  defaultTheme: PropTypes.bool,
  /**
   * directional flavor
   */
  directional: PropTypes.bool,
};

export default ModalFooter;
