import React from 'react';
import { flavorable } from '../../decorators';

export const Container = (props) => {
  const { children, className } = props;
  return (<div className={className}>{children}</div>);
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
  children: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
};

export default flavorable(Container, 'container');
