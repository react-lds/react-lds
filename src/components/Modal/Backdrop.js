import React from 'react';
import { prefixable, flavorable } from '../../decorators';

export const Backdrop = (props) =>
  <div className={props.prefix(['backdrop'], props)} />;

Backdrop.flavors = [
  'open',
];

Backdrop.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
};


export default prefixable(
  flavorable(Backdrop, 'backdrop')
);
