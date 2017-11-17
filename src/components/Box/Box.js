import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { THEMES, getThemeClass } from '../../utils';

const Box = (props) => {
  const { children, className, size, theme, ...rest } = props;

  const sldsClasses = [
    'slds-box',
    { [`slds-box_${size}`]: !!size },
    ...getThemeClass(theme),
    className
  ];

  return (<div {...rest} className={cx(sldsClasses)}>{children}</div>);
};

Box.defaultProps = {
  className: null,
  size: null,
  theme: null,
};

Box.propTypes = {
  /** box content */
  children: PropTypes.node.isRequired,
  /** (optional) className */
  className: PropTypes.string,
  /** (optional) box size */
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small']),
  /** SLDS theme */
  theme: PropTypes.oneOf(THEMES),
};

export default Box;
