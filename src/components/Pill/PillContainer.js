import React from 'react';
import { prefixable } from '../../decorators';

export const PillContainer = ({ children, prefix }) => (
  <div className={prefix(['pill_container'])}>
    {children}
  </div>
);

PillContainer.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * the pill passed into the component
   */
  children: React.PropTypes.node.isRequired,
};

export default prefixable(PillContainer);
