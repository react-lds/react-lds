import React from 'react';
import { flavorable, prefixable } from '../../decorators';

export const PillContainer = ({ children, prefix, onClick }) => (
  <div className={prefix(['pill_container'])} onClick={onClick}>
    {children}
  </div>
);

PillContainer.flavors = [
  'bare',
];

PillContainer.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * the pill passed into the component
   */
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func,
};

export default prefixable(
  flavorable(PillContainer, 'pill_container')
);
