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
   * container content
   */
  children: React.PropTypes.node,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(
  flavorable(Container, 'container')
);
