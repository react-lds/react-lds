import React from 'react';

import prefixable from './../../decorators/prefixable';

export const Button = (props) => {
  const { prefix, onClick, variation, title, disabled, children, icon, isPicklistLabel, selected, value } = props;

  const classes = [
    'button',
    { 'button--icon': icon },
    { [`button--${variation}`]: variation },
    { picklist__label: isPicklistLabel },
    { 'is-selected': selected },
  ];

  return (
    <button onClick={onClick} className={prefix(classes, props)} disabled={disabled} value={value}>
      {(children && children.props && children.props.position === 'right') ? title : null}
      {!children ? title : children}
      {(children && children.props && children.props.position === 'left') ? title : null}
    </button>
  );
};

Button.propTypes = {
  /**
   * button content
   */
  children: React.PropTypes.node,
  /**
   * disables the button
   */
  disabled: React.PropTypes.bool,
  /**
   * button icons
   */
  icon: React.PropTypes.bool,
  /**
   * adds the picklist__label class
   */
  isPicklistLabel: React.PropTypes.bool,
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
  /**
   * button variation
   */
  variation: React.PropTypes.oneOf([
    'neutral',
    'brand',
    'destructive',
    'icon-border-filled',
    'icon-container',
    'icon-inverse',
    'icon-border',
    'icon-bare',
  ]),
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(Button);
