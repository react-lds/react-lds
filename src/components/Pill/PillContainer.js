import React from 'react';
import { flavorable, prefixable } from '../../decorators';

export const PillContainer = (props) => {
  const { children, prefix, onClick } = props;

  return (
    <div className={prefix(['pill_container'], props)} onClick={onClick}>
      {children}
    </div>
  );
};

PillContainer.flavors = [
  'bare',
];

PillContainer.propTypes = {
  /**
   * the pill(s) passed into the component
   */
  children: React.PropTypes.node.isRequired,
  /**
   * onClick handler for the pill container
   */
  onClick: React.PropTypes.func,
  /**
   * prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(
  flavorable(PillContainer, 'pill_container')
);
