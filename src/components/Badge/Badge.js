import React from 'react';
import PropTypes from 'prop-types';

import { themeable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Badge = (props, { cssPrefix }) => {
  const { className, label, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (<span {...rest} className={prefix('badge', className)}>{label}</span>);
};

Badge.contextTypes = { cssPrefix: PropTypes.string };

Badge.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * badge label
   */
  label: PropTypes.string.isRequired,
};

export default themeable(Badge);
