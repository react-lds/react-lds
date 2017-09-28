import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { THEMES, getThemeClass } from '../../utils';

export const Badge = (props) => {
  const {
    className,
    label,
    theme,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-badge',
    ...getThemeClass(theme),
    className,
  ];

  return (<span {...rest} className={cx(sldsClasses)}>{label}</span>);
};

Badge.defaultProps = {
  className: null,
  theme: null,
};

Badge.propTypes = {
  /** (optional) className */
  className: PropTypes.string,
  /** Text that will be displayed */
  label: PropTypes.string.isRequired,
  /** SLDS Theme */
  theme: PropTypes.oneOf(THEMES),
};
