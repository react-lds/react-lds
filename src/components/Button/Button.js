import React from 'react';
import { prefixClasses } from '../../utils';
import { flavorable, variationable } from '../../decorators';

export const Button = (props, { cssPrefix }) => {
  const {
    children,
    className,
    disabled,
    onClick,
    selected,
    value,
    title,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const classes = [
    'button',
    { 'is-selected': !!selected },
  ];

  return (
    <button
      {...rest}
      className={prefix(classes, className)}
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

Button.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

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
   * button icons
   */
  icon: React.PropTypes.bool,
  /**
   * onClick handler to trigger an action
   */
  onClick: React.PropTypes.func,
  /**
   * adds the is-selected class
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

Button.variations = [
  'is-selected',
];

export default variationable(
  flavorable(Button, 'button')
);
