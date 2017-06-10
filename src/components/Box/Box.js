import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { themeable } from '../../decorators';

export const Box = (props) => {
  const { children, className, size, ...rest } = props;

  const sldsClasses = [
    'slds-box',
    { [`slds-box--${size}`]: !!size },
    className
  ];

  return (<div {...rest} className={cx(sldsClasses)}>{children}</div>);
};

Box.defaultProps = {
  className: null,
  size: null,
};

Box.propTypes = {
  /**
   * box content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * box size
   */
  size: PropTypes.oneOf(['x-small', 'small']),
};

export default themeable(Box);
