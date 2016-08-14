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
   * table content
   */
  children: React.PropTypes.node,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(
  variationable(
    flavorable(Table, 'table')
  )
);
