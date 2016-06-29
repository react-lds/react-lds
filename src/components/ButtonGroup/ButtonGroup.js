import React from 'react';

import prefixable from './../../decorators/prefixable';

export const ButtonGroup = ({ children, prefix }) =>
  <div className={prefix(['button-group'])} role="group">
    {children}
  </div>;

ButtonGroup.propTypes = {
  /**
   * Prefix from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * Should be instances of Button
   */
  children: React.PropTypes.node.isRequired,
};

export default prefixable(ButtonGroup);
