import React from 'react';

import prefixable from './../../decorators/prefixable';

export const Button = ({ prefix, onClick, variation, title, disabled, children, icon }) => {
  const classes = [
    'button',
    { 'button--icon': icon },
    { [`button--${variation}`]: variation },
  ];

  return (
    <button onClick={onClick} className={prefix(classes)} disabled={disabled}>
      {(children && children.props.position === 'right') ? title : null}
      {!children ? title : children}
      {(children && children.props.position === 'left') ? title : null}
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
  variation: React.PropTypes.oneOf(['neutral', 'brand', 'icon-border-filled', 'icon-container']),
  title: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  icon: React.PropTypes.bool,
  children: React.PropTypes.element,
};

export default prefixable(Button);
