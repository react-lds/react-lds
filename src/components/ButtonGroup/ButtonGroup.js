import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ButtonGroup = (props) => {
  const { children, className, ...rest } = props;

  const sldsClasses = [
    'slds-button-group',
    className
  ];

  return (<div {...rest} className={cx(sldsClasses)} role="group">{children}</div>);
};

ButtonGroup.defaultProps = {
  className: null,
};

ButtonGroup.propTypes = {
  /**
   * children shoule be instances of button
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
};

export default ButtonGroup;
