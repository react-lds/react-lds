import React from 'react';
import { prefixable, flavorable } from '../../decorators';

export const Container = (props) =>
  <div className={props.prefix([], props)}>
    {props.children}
  </div>;

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
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * main content
   */
  children: React.PropTypes.node,
};

export default prefixable(
  flavorable(Container, 'container')
);
