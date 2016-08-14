import React from 'react';

import prefixable from './../../decorators/prefixable';

export const ButtonGroup = ({ children, prefix }) =>
  <div className={prefix(['button-group'])} role="group">
    {children}
  </div>;

ButtonGroup.propTypes = {
  /**
   * children shoule be instances of button
   */
  children: React.PropTypes.node.isRequired,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(ButtonGroup);
