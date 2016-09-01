import React from 'react';

import { flavorable, variationable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Table = (props, { cssPrefix }) => {
  const { children, className, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (<table {...rest} className={prefix(['table'], className)}>{children}</table>);
};

Table.flavors = [
  'bordered',
  'striped',
  'fixed-layout',
];

Table.variations = [
  'no-row-hover',
  'max-medium-table--stacked',
  'max-medium-table--stacked-horizontal',
];

Table.contextTypes = { cssPrefix: React.PropTypes.string };

Table.propTypes = {
  /**
   * table content
   */
  children: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
};

export default variationable(
  flavorable(Table, 'table')
);
