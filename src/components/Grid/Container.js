import React from 'react';
import PropTypes from 'prop-types';

import { flavorable } from '../../decorators';

export const Container = (props) => {
  const { children, className, ...rest } = props;
  return (<div {...rest} className={className}>{children}</div>);
};

Container.flavors = [
  'small',
  'medium',
  'large',
  'x-large',
  'fluid',
  'left',
  'center',
  'right',
];

Container.propTypes = {
  /**
   * container content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
};

export default flavorable(Container, 'container');
