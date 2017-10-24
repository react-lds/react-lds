import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
    neutral,
    brand,
    destructive,
    inverse,
    success,
    iconSize,
    iconBorder,
    icon,
    iconInverse,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-button',
    { 'slds-is-selected': !!selected },
    { 'slds-button_neutral': neutral },
    { 'slds-button_brand': brand },
    { 'slds-button_destructive': destructive },
    { 'slds-button_inverse': inverse },
    { 'slds-button_success': success },
    { [`slds-button_icon-${iconSize}`]: !!iconSize },
    { [`slds-button_icon-${iconBorder}`]: !!iconBorder },
    { 'slds-button_icon': icon },
    { 'slds-button_icon-inverse': iconInverse },
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

Button.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  selected: false,
  title: null,
  tooltip: null,
  value: null,
  neutral: false,
  brand: false,
  destructive: false,
  inverse: false,
  success: false,
  icon: false,
  iconSize: null,
  iconBorder: null,
  iconInverse: false,
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
  /**
   * neutral button
   */
  neutral: PropTypes.bool,
  /**
   * brand button
   */
  brand: PropTypes.bool,
  /**
   * destructive button
   */
  destructive: PropTypes.bool,
  /**
   * inverse button
   */
  inverse: PropTypes.bool,
  /**
   * success button
   */
  success: PropTypes.bool,
  /**
   * button has icon
   */
  icon: PropTypes.bool,
  /**
   * specify icon size if not medium
   */
  iconSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'large']),
  /**
   * specify icon button border if any
   */
  iconBorder: PropTypes.oneOf(['border', 'border-filled', 'border-inverse']),
  /**
   * invert icon
   */
  iconInverse: PropTypes.bool,

};

export default Button;
