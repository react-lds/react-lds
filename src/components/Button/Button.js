import React from 'react';

import prefixable from './../../decorators/prefixable';

export const Button = (props) => {
  const { prefix, onClick, variation, title, disabled, children, icon, isPicklistLabel } = props;

  const classes = [
    'button',
    { 'button--icon': icon },
    { [`button--${variation}`]: variation },
    { picklist__label: isPicklistLabel },
  ];

  return (
    <button onClick={onClick} className={prefix(classes, props)} disabled={disabled}>
      {(children && children.props && children.props.position === 'right') ? title : null}
      {!children ? title : children}
      {(children && children.props && children.props.position === 'left') ? title : null}
    </button>
  );
};

Button.propTypes = {
  /**
   * Prefix from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * onClick handler to trigger an action
   */
  onClick: React.PropTypes.func,
  variation: React.PropTypes.oneOf(['neutral', 'brand', 'icon-border-filled', 'icon-container', 'icon-inverse']),
  title: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  /**
   * adds the picklist__label class
   */
  isPicklistLabel: React.PropTypes.bool,
  icon: React.PropTypes.bool,
  children: React.PropTypes.node,
};

export default prefixable(Button);
