import React from 'react';
import { prefixClasses } from '../../utils';
import { flavorable } from '../../decorators';

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

Button.contextTypes = { cssPrefix: React.PropTypes.string };

Button.propTypes = {
  /**
   * button content
   */
  children: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * disables the button
   */
  disabled: React.PropTypes.bool,
  /**
   * onClick handler to trigger an action
   */
  onClick: React.PropTypes.func,
  /**
   * renders as selected
   */
  selected: React.PropTypes.bool,
  /**
   * button title
   */
  title: React.PropTypes.string,
  /**
   * adds optional value tag to the button
   */
  value: React.PropTypes.string,
};

export default flavorable(Button, 'button');
