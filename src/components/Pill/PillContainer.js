import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';
import { flavorable } from '../../decorators';

export const PillContainer = (props, { cssPrefix }) => {
  const { children, className, onClick, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (
    <div {...rest} className={prefix('pill_container', className)} onClick={onClick}>
      {children}
    </div>
  );
};

PillContainer.flavors = [
  'bare',
];

PillContainer.contextTypes = { cssPrefix: PropTypes.string };

PillContainer.propTypes = {
  /**
   * the pill(s) passed into the component
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * onClick handler for the pill container
   */
  onClick: PropTypes.func,
};

export default flavorable(PillContainer, 'pill_container');
