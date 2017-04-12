import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';

const ButtonGroup = (props, { cssPrefix }) => {
  const { children, className, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (<div {...rest} className={prefix('button-group', className)} role="group">{children}</div>);
};

ButtonGroup.contextTypes = { cssPrefix: PropTypes.string };

ButtonGroup.propTypes = {
  /**
   * children shoule be instances of button
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
};

export default ButtonGroup;
