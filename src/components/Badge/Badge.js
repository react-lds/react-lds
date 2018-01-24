import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { THEMES, getThemeClass } from '../../utils';
import { applyDecorators, decoratorProp } from '../../utils';

const Badge = (props) => {
  const {
    children,
    className,
    flavor,
    theme,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-badge',
    ...getThemeClass(theme),
    applyDecorators(flavor, 'badge'),
    className,
  ];

  return <span {...rest} className={cx(sldsClasses)}>{children}</span>;
};

Badge.defaultProps = {
  className: null,
  flavor: null,
  theme: null,
};

Badge.propTypes = {
  /** Either a string or a string & an icon */
  children: PropTypes.node.isRequired,
  /** (optional) className */
  className: PropTypes.string,
  /**
   * Badge flavor: array of flavors, you can also provide a single flavor string.
   * Flavors: inverse, lightest
  */
  flavor: decoratorProp([
    'inverse',
    'lightest'
  ]),
  /** DEPRECTATED: SLDS Theme */
  theme: PropTypes.oneOf(THEMES),
};

export default Badge;
