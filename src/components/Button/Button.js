import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';

export const Button = (props) => {
  const {
    children,
    className,
    disabled,
    onClick,
    selected,
    title,
    tooltip,
    value,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-button',
    { 'slds-is-selected': !!selected },
    className,
  ];

  return (
    <button
      {...rest}
      className={cx(sldsClasses)}
      onClick={onClick}
      disabled={disabled}
      value={value}
      title={tooltip || title}
    >
      {(children && children.props && children.props.position === 'right') ? title : null}
      {!children ? title : children}
      {(children && children.props && children.props.position === 'left') ? title : null}
    </button>
  );
};

Button.flavors = [
  'neutral',
  'brand',
  'destructive',
  'icon',
  'icon-border-filled',
  'icon-container',
  'icon-inverse',
  'icon-border',
  'icon-bare',
  'icon-x-small',
  'reset',
  'success',
];

Button.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  selected: false,
  title: null,
  tooltip: null,
  value: null,
};

Button.propTypes = {
  /**
   * button content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * disables the button
   */
  disabled: PropTypes.bool,
  /**
   * onClick handler to trigger an action
   */
  onClick: PropTypes.func.isRequired,
  /**
   * renders as selected
   */
  selected: PropTypes.bool,
  /**
   * button title
   */
  title: PropTypes.string,
  /**
   * button tooltip
   */
  tooltip: PropTypes.string,
  /**
   * adds optional value tag to the button
   */
  value: PropTypes.string,
};

export default flavorable(Button, 'button');
