import React from 'react';
import PropTypes from 'prop-types';

import { flavorable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Button = (props, { cssPrefix }) => {
  const {
    children,
    className,
    disabled,
    onClick,
    title,
    selected,
    value,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = [
    'button',
    { 'is-selected': !!selected },
  ];

  return (
    <button
      {...rest}
      className={prefix(sldsClasses, className)}
      onClick={onClick}
      disabled={disabled}
      value={value}
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
];

Button.contextTypes = { cssPrefix: PropTypes.string };

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
  onClick: PropTypes.func,
  /**
   * renders as selected
   */
  selected: PropTypes.bool,
  /**
   * button title
   */
  title: PropTypes.string,
  /**
   * adds optional value tag to the button
   */
  value: PropTypes.string,
};

export default flavorable(Button, 'button');
