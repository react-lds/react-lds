import React from 'react';

import classNames from 'classnames';

const Button = ({ variation, title, disabled, children, icon }) => {
  const classes = {
    'slds-button': true,
    'slds-button--icon': icon,
    [`slds-button--${variation}`]: variation,
  };

  return (
    <button className={classNames(classes)} disabled={disabled}>
      {(children && children.props.position === 'right') ? title : null}
      {!children ? title : children}
      {(children && children.props.position === 'left') ? title : null}
    </button>
  );
};

Button.propTypes = {
  variation: React.PropTypes.oneOf(['neutral', 'brand']),
  title: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  icon: React.PropTypes.bool,
  children: React.PropTypes.element,
};

export default Button;
