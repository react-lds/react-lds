import React from 'react';
import { prefixable, flavorable, variationable } from '../../decorators';

export const Table = (props) => {
  const { prefix, children } = props;

  return (
    <table className={prefix(['table'], props)}>
      {children}
    </table>
  );
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

Table.propTypes = {
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
  variationable(
    flavorable(Table, 'table')
  )
);
